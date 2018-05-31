var clearTicketsGrid = function () {
    $("#wrap > div.navbar.navbar-sectionheader").hide();
    $("#content-wrap > div > div.page-share.hidden-print").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(2)").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();
    $("").hide();



    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(3)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(4)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(5)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(6)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(7)").hide();
    $("#bodyWrapper > div:nth-child(2) > div > div > div:nth-child(8)").hide();
    $("#anchorProductListFilterSection > div:nth-child(1)").hide();


    $(".productBox").show();
    $("#wrapperCategory").show();
    $(".zeroAvailability").closest("#wrapperCategory").hide();
    $(".productBox:not(:has(#wrapperCategory:visible))").hide();

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
    $(".categoryItemWrapper").show();
};

clearTicketsGrid();

