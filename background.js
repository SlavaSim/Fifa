var buyn = function (n) {
    chrome.tabs.executeScript({
        code: 'var ticketsToBuy = '+n+';'
    }, function() {
        chrome.tabs.executeScript({file: 'buy.js'});
    });
}

chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.executeScript({
        file: 'jquery-3.3.1.js'
    });
    if (command == "clear_tickets_grid") {
        chrome.tabs.executeScript({
            file: 'clear_tickets_grid.js'
        });
    }
    if (command == "fill_cart_captcha") {
        chrome.tabs.executeScript({
            file: 'fill_cart_captcha.js'
        });
    }
    if (command == "buy_1") {
        buyn(1);
    }
    if (command == "buy_2") {
        buyn(2);
    }
    if (command == "buy_3") {
        buyn(3);
    }
    if (command == "buy_4") {
        buyn(4);
    }
});
