// write test that tests multiple function using native node.js testing

const {sum} = require('./index');
const assert = require("node:assert");
const test = require("node:test");

test('sum 2 + 3 to equal 5', () => {
  assert.equal(sum(2, 3), 5);
})