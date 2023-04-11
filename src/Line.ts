import Circle from './Circle';
import Rect from './Rect';
import Vec2 from './Vec2';
import {
  lineIntersectsCircle,
  lineIntersectsPoint,
  lineIntersectsLine,
  distance2D,
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

  /**
   * The lenght of the line.
   */
  get length(): number {
    return distance2D(this.a, this.b);
  }

  /**
   * Check if this intersects a point.
   * @param point
   * @returns
   */
  intersectsPoint(point: Vec2): boolean {
    return lineIntersectsPoint(this, point);
  }

  /**
   * Check if this intersects a circle.
   * @param circle
   * @returns
   */
  intersectsCircle(circle: Circle): boolean {
    return lineIntersectsCircle(this, circle);
  }

  /**
   * Check if this intersects a line.
   * @param line
   * @returns
   */
  intersectsLine(line: Line): boolean {
    return lineIntersectsLine(this, line);
  }

  /**
   * Check if this intersects a rectangle.
   * @param rect
   * @returns
   */
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
