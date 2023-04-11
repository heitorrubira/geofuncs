import Vec3 from '../src/Vec3';

describe('Vec3', () => {
  it('should create a valid Vec3 objects', () => {
    const v1 = new Vec3(10, 11, 12);
    const v2 = Vec3.zero();
    const v3 = Vec3.one();

    expect(v1.x).toBe(10);
    expect(v1.y).toBe(11);
    expect(v1.z).toBe(12);

    expect(v2).toBeInstanceOf(Vec3);
    expect(v2.x).toBe(0);
    expect(v2.y).toBe(0);
    expect(v2.z).toBe(0);

    expect(v3).toBeInstanceOf(Vec3);
    expect(v3.x).toBe(1);
    expect(v3.y).toBe(1);
    expect(v3.z).toBe(1);
  });

  it('toString() should return a valid formated string', () => {
    expect(Vec3.one().toString()).toEqual('{ "x": 1, "y": 1, "z": 1 }');
  });

  it('add() should return a sum of two Vec3', () => {
    const result = Vec3.add(new Vec3(1, 1, 1), new Vec3(3, 4, 5));
    expect(result.x).toBe(4);
    expect(result.y).toBe(5);
    expect(result.z).toBe(6);
  });

  it('sub() should return a subtraction of two Vec3', () => {
    const result = Vec3.sub(new Vec3(1, 1, 1), new Vec3(3, 4, 5));
    expect(result.x).toBe(-2);
    expect(result.y).toBe(-3);
    expect(result.z).toBe(-4);
  });

  it('sub() should return a scalar of a Vec3 and k', () => {
    const result = Vec3.scalar(new Vec3(3, 4, 5), 5);
    expect(result.x).toBe(15);
    expect(result.y).toBe(20);
    expect(result.z).toBe(25);
  });

  it('distance() shoould return a valid distance between two Vec3', () => {
    const result = Vec3.distance(Vec3.zero(), new Vec3(3, 4, 5));
    expect(result).toBe(7.0710678118654755);
  });

  it('rotae() shoould return a valid distance between two Vec3', () => {
    const result = Vec3.distance(Vec3.zero(), new Vec3(3, 4, 5));
    expect(result).toBe(7.0710678118654755);
  });

  it('rotateXYAround() shoould return a valid Vec3 with a new position', () => {
    const pos1 = Vec3.rotateXYAround(Vec3.zero(), new Vec3(3, 0, 0), 45);
    const pos2 = Vec3.rotateXYAround(Vec3.zero(), new Vec3(3, 0, 0), -90);

    expect(pos1.x.toFixed(9)).toBe('2.121320344');
    expect(pos1.y.toFixed(9)).toBe('2.121320344');
    expect(pos1.z).toBe(0);

    expect(pos2.x.toFixed(0)).toBe('0');
    expect(pos2.y.toFixed(0)).toBe('-3');
    expect(pos2.z).toBe(0);
  });
});
