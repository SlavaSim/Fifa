var clearTicketsGrid = function () {
    $("#wrapperCategory").show();
    $(".zeroAvailability").closest("#wrapperCategory").hide();
    $(".productBox:not(:has(#wrapperCategory:visible))").hide();
};

clearTicketsGrid();

