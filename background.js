chrome.commands.onCommand.addListener(function (command) {
    if (command == "clear_tickets_grid") {
            chrome.tabs.executeScript({
            file: 'jquery-3.3.1.js'
        });
        chrome.tabs.executeScript({
            file: 'clear_tickets_grid.js'
        });
    }
});
