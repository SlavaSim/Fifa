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
        chrome.tabs.executeScript({
            file: 'buy_one.js'
        });
    }
});
