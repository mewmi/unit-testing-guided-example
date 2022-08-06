const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply 2 positive integers correctly', () => {
    const result = multiply(5, 6);
    expect(result).toBe(30);
  });
});

describe('Multiply', () => {
  test('should multiply 1 positive integer and 1 negative integer correctly', () => {
    const result = multiply(5, -4);
    expect(result).toBe(-20);
  });
});

describe('Multiply', () => {
  test('should return 0 when any number is 0', () => {
    const result = multiply(5, 0);
    expect(result).toBe(0);
  });
});
