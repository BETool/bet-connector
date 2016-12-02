'use strict';

import BetDealerChrome from 'bet-dealer-chrome';

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

    return this[browserType]();
  }

  chrome () {
    return new BetDealerChrome();
  }
};

export default BetConnector;
