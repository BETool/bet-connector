'use strict';

class BetListenerChrome {
  addListener () {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.sendAnswer(message, this.appId, sendResponse);
      return true;
    });
  }

  send (msg, cb) {
    chrome.runtime.sendMessage(null, msg, null, cb);
  }
}

class BetConnector {
  constructor (browser) {
    let browserType = '';

    switch (browser) {
      case 'chrome':
        browserType = browser;
        break;
      case 'edge':
      case 'opera':
      case 'safari':
      case 'firefox':
      default:
        throw new Error('Not supported browser type');
        break;
    }

    return this.chrome();
  }

  chrome () {
    return new BetListenerChrome();
  }
};

export default BetConnector;
