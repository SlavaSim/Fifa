var clearTicketsGrid = function () {
    $("#wrap > div.navbar.navbar-sectionheader").hide();
    $("#content-wrap > div > div.page-share.hidden-print").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(2)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > hr").hide();
    $("#productListGroupBy > uib-accordion > div > div > div:nth-child(1)").hide();
    $("").hide();
    $("").hide();
    $("").hide();


    $("#divSponsorshipBar").hide();

    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(3)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(4)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(5)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(6)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(7)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(8)").hide();

    $("#anchorProductListFilterSection > div:nth-child(1)").hide();

    $("#anchorProductListFilterSection > div:nth-child(2) > div:nth-child(1)").hide();
    $("#anchorProductListFilterSection > div:nth-child(2) > div:nth-child(2)").hide();
    $("#anchorProductListFilterSection > div:nth-child(2) > div.col-md-3.pull-right.text-right.tops.lineBreak.noPadding").hide();

//    $("#extraContent > div:nth-child(3) > div.tops.text-center.hidden-xs.col-sm-4.col-md-4.col-lg-4.hidden-print").hide();
//    $("#wrap > div.navbar.sitef-wrap").hide();
    $("").hide();
    $("").hide();
    $("").hide();


    $(".productBox").show();
    $("#wrapperCategory").show();
//    $("#wrapperCategory").css("opacity", "1");
//    $(".productBox:not(:has(#wrapperCategory:visible))").hide();

    var url = "https://cors.io/?https://spreadsheets.google.com/feeds/list/1sYEOdKnhfICo9SP9lR2SLuu6WxNxPc88X7JBUhwI4_o/od6/public/values?alt=json";
    $.getJSON(url, function (data) {
        // var products = [];
        // debugger;
        for (var i = 0; i < data.feed.entry.length; i++) {
            var entry = data.feed.entry[i];
            var num = entry.gsx$id.$t.replace("IMT", "");
            var intnum = parseInt(num);
//            var $productBox = $("div[class='productBox']:nth(" + (intnum - 1) + ")");
            var $productBox = $(".matchDescription:contains(' " + num + " ')").closest("[class=productBox]");
            // products.push($productBox);
            var scoreSum = 0;
            var availableScoreSum = 0;
            for (var cat = 1; cat < 5; cat++) {
                var scoreCat = parseInt(eval("entry.gsx$cat" + cat).$t);
                scoreSum += scoreCat;
                var $catWrapper = $productBox.find("div:contains('CAT " + cat + "')").closest("#wrapperCategory");
                $catWrapper.attr("score", scoreCat);
                $catWrapper.css("opacity", "1");
                if ($catWrapper.find(".zeroAvailability").length == 0) {
                    availableScoreSum += scoreCat;
                    $catWrapper.css("font-size", (10 + scoreCat) + "px");
                    $catWrapper.find(".categoryItem").css("min-width", (55 + 3 * scoreCat) + "px");
                }
                if (scoreCat == 0) {
                    $catWrapper.css("opacity", "0.1");
                }
            }
            $productBox.attr("score", scoreSum);
            if (availableScoreSum == 0)
                $productBox.hide();
            // $productBox.css("position", "absolute");
        }
        // products.sort(function (a, b) {
        //     var scoreA = parseInt($(a).attr("score"));
        //     var scoreB = parseInt($(b).attr("score"));
        //     return scoreB - scoreA;
        // });
        var $wrapper = $("div[class='productBox']:first").parent();
        $("div[class='productBox']").sort(function (a, b) {
            var scoreA = parseInt($(a).attr("score"));
            var scoreB = parseInt($(b).attr("score"));
            return scoreB - scoreA;
        }).appendTo($wrapper);

        /*
                var top = $wrapper.position().top - 10;
                for (i = 0; i < products.length; i++) {
                    if (parseInt(products[i].attr("score")) > 0) {
                        products[i].css("top", top + "px");
                        products[i].addClass("myProductBox");
                        top += products[i].height();
                    }
                }
        */

        /*
                var $checkout = $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(12)");
                $checkout.css("position", "absolute");
                $checkout.css("top", top + "px");
                $checkout.css("width", "100%");
        */
    });

    $(".zeroAvailability").closest("#wrapperCategory").hide();
    $(".productBox:not(:has(#wrapperCategory:visible))").hide();
    $("#wrapperCategory").show();

    $(".categoryItemWrapper").show();
};

clearTicketsGrid();

