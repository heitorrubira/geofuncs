import Box from '../src/Box';
import Sphere from '../src/Sphere';
import Vec3 from '../src/Vec3';

describe('Sphere', () => {
  it('should create a valid Sphere objects', () => {
    const sphere1 = new Sphere(Vec3.zero(), 3);
    const sphere2 = new Sphere(Vec3.one());

    expect(sphere1.center.x).toBe(0);
    expect(sphere1.center.y).toBe(0);
    expect(sphere1.center.z).toBe(0);
    expect(sphere1.radius).toBe(3);

    expect(sphere2.center.x).toBe(1);
    expect(sphere2.center.y).toBe(1);
    expect(sphere2.center.z).toBe(1);
    expect(sphere2.radius).toBe(1);
  });

  it('intersectsBox() should check for an intersection and not', () => {
    const sphere = new Sphere(Vec3.zero(), 3);
    const boxA = new Box(new Vec3(1, 1, 2), new Vec3(10, 10, 10));
    const boxB = new Box(new Vec3(0, 15, 0), new Vec3(20, 20, 20));

    expect(sphere.intersectsBox(boxA)).toBe(true);
    expect(sphere.intersectsBox(boxB)).toBe(false);
  });

  it('intersectsCircle() should check for an intersection and not', () => {
    const sphere = new Sphere(Vec3.zero(), 3);
    const sphereA = new Sphere(new Vec3(5, 3, 5), 6);
    const sphereB = new Sphere(new Vec3(0, 20, 0), 6);

    expect(sphere.intersectsSphere(sphereA)).toBe(true);
    expect(sphere.intersectsSphere(sphereB)).toBe(false);
  });

  it('toString() should return a valid string formated', () => {
    const sphere = new Sphere(Vec3.one(), 4);
    expect(sphere.toString()).toEqual(
      '{ "center": { "x": 1, "y": 1, "z": 1 }, "radius": 4 }'
    );
  });
});
