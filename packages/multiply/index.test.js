// write test that tests multiple function using native node.js testing

const {multiply} = require('./index');
const assert = require("node:assert");
const test = require("node:test");

test('multiply 2 * 3 to equal 6', () => {
  assert.equal(multiply(2, 3), 6);
})