/*$("body").append("<div id='buy1'/>");
$("body").append("<div id='buy2'/>");
$("body").append("<div id='buy3'/>");
$("body").append("<div id='buy4'/>");

$("#buy1").click(function () {
    buy(1);
});

var buy = function (q) {
    $("select[data-resource-id='ChooseQuantity']")[0].selectedIndex = q;
    angular.element("[data-resource-id=AddToShoppingBasket]").trigger("click");
};
*/