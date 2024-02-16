const { add } = require("../arithmetica");

test("add 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
});

test("add 400 + 100 to equal 500", () => {
    expect(add(400, 100)).toBe(500);
});

test("add 0 + 0 to equal 0", () => {
    expect(add(0, 0)).toBe(0);
});

test("add 900000 + 900000 to equal 1800000", () => {
    expect(add(900000, 900000)).toBe(1800000);
});