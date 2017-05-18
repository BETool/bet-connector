'use strict';

import BetDealerChrome from 'bet-dealer-chrome';
import BetBrokerChrome from 'bet-broker-chrome';

class BetConnector {
  constructor (browser, mediator) {
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
    }

    return this[browserType](mediator);
  }

  chrome (mediator) {
    if ('bg' === mediator.type) {
      return new BetDealerChrome(mediator);
    }
    if ('cs' === mediator.type) {
      return new BetBrokerChrome(mediator);
    }

    throw new Error('Mediator type wrong');
  }
}

export default BetConnector;
