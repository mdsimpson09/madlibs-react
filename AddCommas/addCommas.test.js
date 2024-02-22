const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("formats numbers with commas (non-bonus cases)", () => {
    expect(addCommas(1000)).toBe("1,000");
    expect(addCommas(12345)).toBe("12,345");
    expect(addCommas(9876543210)).toBe("9,876,543,210");
    // Add more test cases as needed
  });

  test("handles negative numbers", () => {
    expect(addCommas(-1000)).toBe("-1,000");
    expect(addCommas(-12345)).toBe("-12,345");
    // Add more test cases for negative numbers as needed
  });

  test("handles decimal numbers", () => {
    expect(addCommas(12345.67)).toBe("12,345.67");
    expect(addCommas(-9876.54321)).toBe("-9,876.54321");
    // Add more test cases for decimal numbers as needed
  });

  test("handles zero", () => {
    expect(addCommas(0)).toBe("0");
  });
});