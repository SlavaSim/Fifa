var clearTicketsGrid = function () {
    $("#wrap > div.navbar.navbar-sectionheader").hide();
    $("#content-wrap > div > div.page-share.hidden-print").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(2)").hide();
    $("").hide();
    $("").hide();
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
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();



    $(".productBox").show();
    $("#wrapperCategory").show();
//    $("#wrapperCategory").css("opacity", "1");
//    $(".productBox:not(:has(#wrapperCategory:visible))").hide();

    var url = "https://cors.io/?https://spreadsheets.google.com/feeds/list/1sYEOdKnhfICo9SP9lR2SLuu6WxNxPc88X7JBUhwI4_o/od6/public/values?alt=json";
    $.getJSON(url, function (data) {
        for (var i = 0; i < data.feed.entry.length; i++) {
            var entry = data.feed.entry[i];
            var num = entry.gsx$id.$t.replace("IMT", "");
            var intnum = parseInt(num);
            var $productBox = $("div[class='productBox']:nth(" + (intnum - 1) + ")");

            var scoreSum = 0;
            for (var cat = 1; cat < 5; cat++) {
                var scoreCat = parseInt(eval("entry.gsx$cat" + cat).$t);
                scoreSum += scoreCat;
                var $catWrapper = $productBox.find(".categoryItem[title='CATEGORY " + cat + "']").closest("#wrapperCategory");
                $catWrapper.attr("score", scoreCat);
                $catWrapper.css("opacity", "1");
                if (scoreCat == 0) {
                    $catWrapper.css("opacity", "0.2");
                }
            }
            $productBox.attr("score", scoreSum);
            if (scoreSum == 0)
                $productBox.hide();
        }
        var $wrapper = $("div[class='productBox']:first").parent();
/*
        $("div[class='productBox']").sort(function (a, b) {
            var scoreA = parseInt($(a).attr("score"));
            var scoreB = parseInt($(b).attr("score"));
            return scoreA > scoreB;
        }).appendTo($wrapper);*/
    });

    $(".zeroAvailability").closest("#wrapperCategory").hide();
    $(".productBox:not(:has(#wrapperCategory:visible))").hide();
    $("#wrapperCategory").show();

    /*
        $("div.matchDescription:contains('02')").closest(".productBox").hide(); // Уругвай-Египет
        $("div.matchDescription:contains('06')").closest(".productBox").hide(); // Перу-Дания
        $("div.matchDescription:contains('12')").closest(".productBox").hide(); // Швеция-Корея
        $("div.matchDescription:contains('16')").closest(".productBox").hide(); // Колумбия-Япония
        $("div.matchDescription:contains('18')").closest(".productBox").hide(); // Уругвай-СА
        $("div.matchDescription:contains('20')").closest(".productBox").hide(); // Иран-Испания
        $("div.matchDescription:contains('22')").closest(".productBox").hide(); // Дания-Австралия
        $("div.matchDescription:contains('26')").closest(".productBox").hide(); // Сербия-Швейцария
        $("div.matchDescription:contains('28')").closest(".productBox").hide(); // Корея-Мексика
        $("div.matchDescription:contains('31')").closest(".productBox").hide(); // Польша-Колумбия
        $("div.matchDescription:contains('32')").closest(".productBox").hide(); // Япония-Сенегал
        $("div.matchDescription:contains('34')").closest(".productBox").hide(); // СА-Египет
        $("div.matchDescription:contains('35')").closest(".productBox").hide(); // Иран-Португалия
        $("div.matchDescription:contains('42')").closest(".productBox").hide(); // Швейцария-Коста-рика
        $("div.matchDescription:contains('43')").closest(".productBox").hide(); // Корея-Германия
        $("div.matchDescription:contains('44')").closest(".productBox").hide(); // Мексика-Швеция
        $("div.matchDescription:contains('46')").closest(".productBox").hide(); // Панама-Тунис
        $("div.matchDescription:contains('47')").closest(".productBox").hide(); // Япония-Польша
        $("div.matchDescription:contains('48')").closest(".productBox").hide(); // Сенегал-Колумбия
        */
    $(".categoryItemWrapper").show();
};

clearTicketsGrid();

