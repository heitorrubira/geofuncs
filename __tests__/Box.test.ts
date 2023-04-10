import Box from '../src/Box';
import Sphere from '../src/Sphere';
import Vec3 from '../src/Vec3';

describe('Box', () => {
  it('should create a valid Box objects', () => {
    const box = new Box(Vec3.one(), new Vec3(5, 4, 3));

    expect(box.min.x).toBe(1);
    expect(box.min.y).toBe(1);
    expect(box.min.z).toBe(1);

    expect(box.max.x).toBe(5);
    expect(box.max.y).toBe(4);
    expect(box.max.z).toBe(3);
  });

  it('should return a valid values for getters', () => {
    const box = new Box(new Vec3(5, 4, 3), Vec3.one());

    expect(box.maxX).toBe(5);
    expect(box.maxY).toBe(4);
    expect(box.maxZ).toBe(3);

    expect(box.minX).toBe(1);
    expect(box.minY).toBe(1);
    expect(box.minZ).toBe(1);
  });

  it('intersectsBox() should check for an intersection and not', () => {
    const box = new Box(Vec3.zero(), new Vec3(10, 10, 10));
    const otherA = new Box(new Vec3(5, 3, 5), new Vec3(10, 10, 10));
    const otherB = new Box(new Vec3(0, 15, 0), new Vec3(20, 20, 20));
    const otherC = new Box(new Vec3(20, 0, 0), new Vec3(25, 25, 25));

    expect(box.intersectsBox(otherA)).toBe(true);
    expect(box.intersectsBox(otherB)).toBe(false);
    expect(box.intersectsBox(otherC)).toBe(false);
  });

  it('intersectsSphere() should check for an intersection and not', () => {
    const box = new Box(Vec3.zero(), new Vec3(10, 10, 10));
    const sphereA = new Sphere(new Vec3(5, 3, 5), 10);
    const sphereB = new Sphere(new Vec3(0, 20, 0), 5);

    expect(box.intersectsSphere(sphereA)).toBe(true);
    expect(box.intersectsSphere(sphereB)).toBe(false);
  });

  it('toString() should return a valid string formated', () => {
    const box = new Box(Vec3.one(), new Vec3(5, 6, 7));
    expect(box.toString()).toEqual(
      '{ "min": { "x": 1, "y": 1, "z": 1 }, "max": { "x": 5, "y": 6, "z": 7 } }'
    );
  });
});
