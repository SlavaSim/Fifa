$("select[data-resource-id='ChooseQuantity']")[0].selectedIndex = 1;
setTimeout(function () {
    $("select[data-resource-id='ChooseQuantity']").change();
    setTimeout(function () {
        $("button[data-resource-id='AddToShoppingBasket']").click();
    }, 500);
}, 100);
