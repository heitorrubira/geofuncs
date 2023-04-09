import Vec2 from '../src/Vec2';

describe('Vec2', () => {
  it('should create a valid Vec2 objects', () => {
    const v1 = new Vec2(10, 11);
    const v2 = Vec2.zero();
    const v3 = Vec2.one();

    expect(v1.x).toBe(10);
    expect(v1.y).toBe(11);

    expect(v2.x).toBe(0);
    expect(v2.y).toBe(0);

    expect(v3.x).toBe(1);
    expect(v3.y).toBe(1);
  });

  it('toString() should return a valid formated string', () => {
    expect(Vec2.one().toString()).toEqual('{ "x": 1, "y": 1 }');
  });

  it('add() should return a sum of two Vec2', () => {
    const result = Vec2.add(new Vec2(1, 1), new Vec2(3, 4));
    expect(result.x).toBe(4);
    expect(result.y).toBe(5);
  });

  it('sub() should return a subtraction of two Vec2', () => {
    const result = Vec2.sub(new Vec2(1, 1), new Vec2(3, 4));
    expect(result.x).toBe(-2);
    expect(result.y).toBe(-3);
  });

  it('sub() should return a scalar of a Vec2 and k', () => {
    const result = Vec2.scalar(new Vec2(3, 4), 5);
    expect(result.x).toBe(15);
    expect(result.y).toBe(20);
  });

  it('distance() shoould return a valid distance between two Vec2', () => {
    const result = Vec2.distance(Vec2.zero(), new Vec2(3, 4));
    expect(result).toBe(5);
  });
});
