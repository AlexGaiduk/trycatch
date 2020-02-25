import isNumber from '../app';

test("a number", () => {
  const expect = 15;
  const result = isNumber("15");
  expect(result).toBe(expect);
});

