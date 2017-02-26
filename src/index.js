'use strict';

import BetDealerChrome from 'bet-dealer-chrome';

class BetConnector {
  constructor (browser, bg) {
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

    return this[browserType](bg);
  }

  chrome (bg) {
    return new BetDealerChrome(bg);
  }
};

export default BetConnector;
