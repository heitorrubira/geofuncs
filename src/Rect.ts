import Circle from './Circle';
import Vec2 from './Vec2';
import {
  rectIntersectsRect,
  circleIntersectsRect,
  pointIntersectsRect,
} from './utils';

/**
 * A React class
 */
export default class Rect {
  /** The 2D vector position */ public position: Vec2;
  /** The width */ public width: number;
  /** The height */ public height: number;

  /**
   * The constructor function that creates a new instance of the Rect class
   * @param pos The center position
   * @param w The width (default: 1)
   * @param h The height (default: 1)
   */
  constructor(pos: Vec2, w = 1, h = 1) {
    this.position = pos;
    this.width = w;
    this.height = h;
  }

  /**
   * The top position of the rectangle.
   */
  get top(): number {
    return this.position.y - this.height / 2.0;
  }
  /**
   * The bottom position of the rectangle.
   */
  get bottom(): number {
    return this.position.y + this.height / 2.0;
  }
  /**
   * The left position of the rectangle.
   */
  get left(): number {
    return this.position.x - this.width / 2.0;
  }
  /**
   * The right position of the rectangle.
   */
  get right(): number {
    return this.position.x + this.width / 2.0;
  }
  /**
   * The x position of the rectangle.
   */
  get x(): number {
    return this.position.x;
  }
  /**
   * The y position of the rectangle.
   */
  get y(): number {
    return this.position.y;
  }
  /**
   * The area of the rectangle.
   */
  get area(): number {
    return this.width * this.height;
  }

  /**
   * A static method that returns a rectangle with 0 position and 1 of size.
   * @returns
   */
  static zeroPosSizeOne(): Rect {
    return new Rect(Vec2.zero());
  }

  intersectsPoint(point: Vec2): boolean {
    return pointIntersectsRect(point, this);
  }

  intersectsCircle(circle: Circle): boolean {
    return circleIntersectsRect(circle, this);
  }

  intersectsRect(rect: Rect): boolean {
    return rectIntersectsRect(rect, this);
  }

  /**
   * A method that returns the string representation of the rectangle
   * @returns
   */
  toString(): string {
    return `{ "position": ${this.position.toString()}, "width": ${
      this.width
    }, "height": ${this.height} }`;
  }
}
