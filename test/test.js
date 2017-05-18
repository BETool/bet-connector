'use strict';

import { expect } from 'chai';
import BetDealerChrome from 'bet-dealer-chrome';
import BetBrokerChrome from 'bet-broker-chrome';
import BetConnector from '../src/index';


describe('Main', () => {
  class Mediator {
    constructor (type) {
      this.type = type;
    }
  }

  it('should instanceof BetDealerChrome', () => {
    const mediator = new Mediator('bg');
    const dealer = new BetConnector('chrome', mediator);
    expect(dealer instanceof BetDealerChrome).to.equal(true);
  });

  it('should instanceof BetBrokerChrome', () => {
    const mediator = new Mediator('cs');
    const broker = new BetConnector('chrome', mediator);
    expect(broker instanceof BetBrokerChrome).to.equal(true);
  });
});
