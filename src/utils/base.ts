export const NUM_PRECISION = 9;

export const fixedNum = (n: number): number => Number(n.toFixed(NUM_PRECISION));

export const toRadians = (deg: number): number => deg * (Math.PI / 180);

export const toDegrees = (rad: number): number => rad * (180 / Math.PI);

export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
