var action = "";
$.post("https://tickets.fifa.com/WDirect/preSellHandler.axd/showChallenge", function (data) {
    action = data.actionOnSuccess;
});


var html = $.parseHTML(action);
var canvas = document.createElement("canvas");
var img = document.createElement("img");
img.src = html[0].currentSrc;
canvas.width = img.width;
canvas.height = img.height;
var ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0);
var dataURL = canvas.toDataURL("image/png");

var areas = $(html).find("area").toArray();
var shapes = [];
for (var i = 0; i < areas.length; i++) {
    var coords = areas[i].coords.split(",");
    var shape = {};
    shape.code = $(areas[i]).attr("onclick").replace("captcha.receive(", "").replace(")", "").split(",")[0]
    shape.x1 = coords[0];
    shape.y1 = coords[1];
    shape.x2 = coords[2];
    shape.y2 = coords[3];
    shapes[i] = shape;
}


var count = $(areas[0]).attr("onclick").replace("captcha.receive(", "").replace(")", "").split(",")[1];

var request = {};
request.dataURL = dataURL;
request.shapes = shapes;
request.count = count;


var url = "http://localhost:8080/rest/resolve";
var answer;
$.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(request),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        answer = data;
    }
});

var reserveAnswer = [];
for(i=0;i<answer.length;i++){
    reserveAnswer.push(parseInt(answer[i].code));
}
var reserveUrl = "https://tickets.fifa.com/API/WDirect/en/Request/PostReservation";
//{"reserve":{"ProductId":"IMT42","CategoryId":18,"PriceType":155,"Quantity":2,"QuantityCompanions":0,"userAnswer":[451,699,499,985,591]},"previousReserves":[]}
//{"reserve":{"ProductId":"IMT42","CategoryId":18,"PriceType":155,"Quantity":2,"QuantityCompanions":0,"userAnswer":[689,175,1000,688,966]},"previousReserves":[]}
//{"reserve":{"ProductId":"IMT08","CategoryId":14,"PriceType":155,"Quantity":2,"userAnswer":[576,793,821,237,763]},"previousReserves":[]}


var reserve = {};
reserve.ProductId="IMT08";
reserve.CategoryId=14;
reserve.PriceType=155;
reserve.Quantity=2;
//reserve.QuantityCompanions=0;
reserve.userAnswer=reserveAnswer;

var result;
$.ajax({
    type: "POST",
    url: reserveUrl,
    data: JSON.stringify({reserve:reserve,previousReserves:[]}),
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
        result = data;
    }
});
