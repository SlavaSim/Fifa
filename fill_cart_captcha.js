var img = $('.captchaImg')[0];
var canvas = document.createElement("canvas");
canvas.width = img.width;
canvas.height = img.height;

// Copy the image contents to the canvas
var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0);

// Get the data-URL formatted image
// Firefox supports PNG and JPEG. You could check img.src to
// guess the original format, but be aware the using "image/jpg"
// will re-encode the image.
var dataURL = canvas.toDataURL("image/png");
var areas = $("area").toArray();
var shapes = [];

for (var i = 0; i < areas.length; i++) {
    var coords = areas[i].coords.split(",");
    var shape = {};
    shape.x1 = coords[0];
    shape.y1 = coords[1];
    shape.x2 = coords[2];
    shape.y2 = coords[3];
    shapes[i] = shape;
}
var count = $("area:first").attr("onclick").replace("captcha.receive(", "").replace(")", "").split(",")[1];

var request = {};
request.dataURL = dataURL;
request.shapes = shapes;
request.count = count;

var url = "http://localhost:8080/rest/resolve";

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

$.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(request),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        $(".resolved").remove();
        var cappos = $("img.captchaImg").position();
        for (var i = 0; i < data.length; i++) {
            var area = $("area")[data[i]];
            var coords = area.coords.split(",");
            var id = "resolved"+(i+1);
            $("#preSell").append("<div id='"+id+"' class='resolved'>"+(i+1)+"</div>");
            var el = $("#"+id);
            el.css("position","absolute");
            var l  = cappos.left+parseInt(coords[0])+2;
            var t  = 70+parseInt(coords[1])+5;
            el.css("left",l+"px");
            el.css("top",t+"px");
            area.click();
            
            sleep(100);
        }
        setTimeout(function () {
            $("button[data-resource-id=ButtonSendCode]").click();
        }, 200);
    }
});


//$('#ngdialog4-aria-labelledby').text(dataURL);
//dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
