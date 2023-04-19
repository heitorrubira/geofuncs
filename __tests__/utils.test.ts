import { toDegrees, toRadians, fixedNum, clamp } from '../src/utils';

describe('utils', () => {
  it('fixedNum() should return a fixed precision number of a given number', () => {
    expect(fixedNum(3.12345678913)).toBe(3.123456789);
    expect(fixedNum(3.140000000001)).toBe(3.14);
  });

  it('toDegrees() should convert to degrees a number in radians', () => {
    const deg = toDegrees(1);
    expect(fixedNum(deg)).toBe(57.295779513);
  });

  it('toRadians() should convert to degrees a number in radians', () => {
    const rad = toRadians(90);
    expect(fixedNum(rad)).toBe(1.570796327);
  });

  it('clamp() should return a value between a given limit', () => {
    expect(clamp(4, 1, 5)).toBe(4);
    expect(clamp(1, 2, 5)).toBe(2);
    expect(clamp(7, 1, 5)).toBe(5);
  });
});
