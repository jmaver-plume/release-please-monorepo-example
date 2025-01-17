import { sum } from "../lib";
import assert from "node:assert";
import test, { describe } from "node:test";

describe("sum", () => {
  test("sum 2 + 3 to equal 5", () => {
    assert.equal(sum(2, 3), 5);
  });

  test("sum 2 + 3 to equal 5", () => {
    assert.equal(sum(2, 3), 5);
  });
});
