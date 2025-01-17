// write test that tests multiple function using native node.js testing

const { difference } = require("./index");
const assert = require("node:assert");
const test = require("node:test");

test("difference 2 - 2 to equal 0", () => {
  assert.equal(difference(2, 2), 0);
});
