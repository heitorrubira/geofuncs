import Circle from './Circle';
import Rect from './Rect';
// import Rect from './Rect';
import Vec2 from './Vec2';
import {
  lineIntersectsCircle,
  lineIntersectsPoint,
  lineIntersectsLine,
  distanceVec2,
  lineIntersectsRect,
} from './utils';

/**
 * A Line segment class
 */
export default class Line {
  /** The 2D vector a */ public a: Vec2;
  /** The 2D vector b */ public b: Vec2;

  /**
   * The constructor function that creates a new instance of the Line class
   * @param a The a
   * @param b The b
   */
  constructor(a: Vec2, b: Vec2) {
    this.a = a;
    this.b = b;
  }

  get length(): number {
    return distanceVec2(this.a, this.b);
  }

  intersectsPoint(point: Vec2): boolean {
    return lineIntersectsPoint(this, point);
  }

  intersectsCircle(circle: Circle): boolean {
    return lineIntersectsCircle(this, circle);
  }

  intersectsLine(line: Line): boolean {
    return lineIntersectsLine(this, line);
  }

  intersectsRect(rect: Rect): boolean {
    return lineIntersectsRect(this, rect);
  }

  /**
   * A method that returns the string representation of the line
   * @returns
   */
  toString(): string {
    return `{ "a": ${this.a.toString()}, "b": ${this.b.toString()} }`;
  }
}
