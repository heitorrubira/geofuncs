import Circle from '../src/Circle';
import Rect from '../src/Rect';
import Vec2 from '../src/Vec2';

describe('Circle', () => {
  it('should create a valid Circle objects', () => {
    const c1 = new Circle(Vec2.one(), 3);
    const c2 = Circle.zeroPosRadiusOne();

    expect(c1.center.x).toBe(1);
    expect(c1.center.y).toBe(1);
    expect(c1.radius).toBe(3);

    expect(c2).toBeInstanceOf(Circle);
    expect(c2.center.x).toBe(0);
    expect(c2.center.y).toBe(0);
    expect(c2.radius).toBe(1);
  });

  it('toString() should return a valid string formated', () => {
    const circle = new Circle(Vec2.zero(), 10);
    expect(circle.toString()).toEqual(
      '{ "center": { "x": 0, "y": 0 }, "radius": 10 }'
    );
  });

  it('intersectsPoint() should check for an intersection and not', () => {
    const circle = new Circle(Vec2.zero(), 10);
    expect(circle.intersectsPoint(Vec2.one())).toBe(true);
    expect(circle.intersectsPoint(new Vec2(11, 0))).toBe(false);
  });

  it('intersectsCircle() should check for an intersection and not', () => {
    const circle = new Circle(Vec2.zero(), 10);
    expect(circle.intersectsCircle(new Circle(new Vec2(5, 5), 2))).toBe(true);
    expect(circle.intersectsCircle(new Circle(new Vec2(12, 0), 1))).toBe(false);
  });

  it('intersectsRect() should check for an intersection and not', () => {
    const circle = new Circle(Vec2.zero(), 10);
    expect(circle.intersectsRect(new Rect(new Vec2(4, 5), 3, 3))).toBe(true);
    expect(circle.intersectsRect(new Rect(new Vec2(12, 12), 1, 1))).toBe(false);
  });
});
