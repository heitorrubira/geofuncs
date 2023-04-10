import Circle from '../src/Circle';
import Rect from '../src/Rect';
import Vec2 from '../src/Vec2';

describe('Rect', () => {
  it('should create a valid Rect objects', () => {
    const r1 = new Rect(Vec2.one(), 3, 4);
    const r2 = Rect.zeroPosSizeOne();

    expect(r1.position.x).toBe(1);
    expect(r1.position.y).toBe(1);
    expect(r1.width).toBe(3);
    expect(r1.height).toBe(4);

    expect(r2).toBeInstanceOf(Rect);
    expect(r2.position.x).toBe(0);
    expect(r2.position.y).toBe(0);
    expect(r2.width).toBe(1);
    expect(r2.height).toBe(1);
  });

  it('should return a valid values for getters', () => {
    const rect = new Rect(Vec2.one(), 10, 6);
    expect(rect.bottom).toBe(4);
    expect(rect.top).toBe(-2);
    expect(rect.right).toBe(6);
    expect(rect.left).toBe(-4);
    expect(rect.x).toBe(1);
    expect(rect.y).toBe(1);
    expect(rect.area).toBe(60);
  });

  it('toString() should return a valid string formated', () => {
    const rect = new Rect(Vec2.zero(), 10);
    expect(rect.toString()).toEqual(
      '{ "position": { "x": 0, "y": 0 }, "width": 10, "height": 1 }'
    );
  });

  it('intersectsPoint() should check for an intersection and not', () => {
    const rect = new Rect(Vec2.zero(), 10, 10);
    expect(rect.intersectsPoint(Vec2.one())).toBe(true);
    expect(rect.intersectsPoint(new Vec2(11, 0))).toBe(false);
  });

  it('intersectsCircle() should check for an intersection and not', () => {
    const rect = new Rect(Vec2.zero(), 5, 4);
    expect(rect.intersectsCircle(new Circle(new Vec2(3, 3), 2))).toBe(true);
    expect(rect.intersectsCircle(new Circle(new Vec2(3, 3), 1))).toBe(false);
  });

  it('intersectsRect() should check for an intersection and not', () => {
    const rect = new Rect(Vec2.zero(), 5, 6);
    expect(rect.intersectsRect(new Rect(new Vec2(4, 0), 4, 3))).toBe(true);
    expect(rect.intersectsRect(new Rect(new Vec2(12, 12), 1, 1))).toBe(false);
  });
});
