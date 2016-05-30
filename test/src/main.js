'use strict';

const chai = require('chai');
const mocha = require('mocha');

const rule_set = require('../../src/main');

mocha.describe('rule_set.boolean', () => {
  mocha.it('', () => {
    chai.expect(rule_set.boolean('f')).to.be.false;
  });
});
