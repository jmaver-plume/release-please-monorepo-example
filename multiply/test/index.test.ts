// write test that tests multiple function using native node.js testing

import { multiply } from "../lib";
import assert from "node:assert";
import test from "node:test";

test("multiply 2 * 3 to equal 6", () => {
  assert.equal(multiply(2, 3), 6);
});
