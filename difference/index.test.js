// write test that tests multiple function using native node.js testing

const { difference } = require("./index");
const assert = require("node:assert");
const test = require("node:test");

test("difference 4 - 2 - 1 to equal 1", () => {
  assert.equal(difference(4, 2, 1), 1);
});
