import Circle from '../src/Circle';
import Rect from '../src/Rect';
import Line from '../src/Line';
import Vec2 from '../src/Vec2';

describe('Line', () => {
  it('should create a valid Line objects', () => {
    const l1 = new Line(Vec2.zero(), Vec2.one());

    expect(l1.a.x).toBe(0);
    expect(l1.a.y).toBe(0);
    expect(l1.b.x).toBe(1);
    expect(l1.b.y).toBe(1);
  });

  it('should return a valid values for getters', () => {
    const line = new Line(Vec2.zero(), Vec2.one());
    expect(line.length).toEqual(1.4142135623730951);
  });

  it('toString() should return a valid string formated', () => {
    const line = new Line(Vec2.zero(), Vec2.one());
    expect(line.toString()).toEqual(
      '{ "a": { "x": 0, "y": 0 }, "b": { "x": 1, "y": 1 } }'
    );
  });

  it('intersectsPoint() should check for an intersection and not', () => {
    const line = new Line(Vec2.zero(), new Vec2(10, 0));

    expect(line.intersectsPoint(new Vec2(1, 0))).toBe(true);
    expect(line.intersectsPoint(Vec2.one())).toBe(false);
  });

  it('intersectsCircle() should check for an intersection and not', () => {
    const line = new Line(Vec2.zero(), new Vec2(10, 0));

    expect(line.intersectsCircle(new Circle(new Vec2(3, 2), 3))).toBe(true);
    expect(line.intersectsCircle(new Circle(new Vec2(3, 2), 1))).toBe(false);
  });

  it('intersectsLine() should check for an intersection and not', () => {
    const line = new Line(Vec2.zero(), new Vec2(10, 0));

    expect(line.intersectsLine(new Line(new Vec2(0, -2), new Vec2(8, 3)))).toBe(
      true
    );
    expect(line.intersectsLine(new Line(Vec2.one(), new Vec2(10, 1)))).toBe(
      false
    );
    expect(
      line.intersectsLine(new Line(new Vec2(15, -5), new Vec2(15, 5)))
    ).toBe(false);
  });

  it('intersectsRect() should check for an intersection and not', () => {
    const line = new Line(Vec2.zero(), new Vec2(10, 0));

    expect(line.intersectsRect(new Rect(new Vec2(5, 2), 4, 4))).toBe(true);
    expect(line.intersectsRect(new Rect(new Vec2(3, 2), 1, 2))).toBe(false);
  });
});
