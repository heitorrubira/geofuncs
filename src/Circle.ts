import Rect from './Rect';
import Vec2 from './Vec2';
import {
  circleIntersectsCircle,
  pointIntersectsCircle,
  circleIntersectsRect,
} from './utils';
/**
 * A Circle class
 */
export default class Circle {
  /** The 2D vector position */ public position: Vec2;
  /** The radius */ public radius: number;

  /**
   * The constructor function that creates a new instance of the Circle class
   * @param pos The center position
   * @param radius The radius
   */
  constructor(pos: Vec2, radius = 1) {
    this.position = pos;
    this.radius = radius;
  }

  /**
   * A static method that returns a circle with 0 position and 1 of radius.
   * @returns
   */
  static zeroPosRadiusOne(): Circle {
    return new Circle(Vec2.zero());
  }

  intersectsPoint(point: Vec2): boolean {
    return pointIntersectsCircle(point, this);
  }

  intersectsCircle(circle: Circle): boolean {
    return circleIntersectsCircle(circle, this);
  }

  intersectsRect(rect: Rect): boolean {
    return circleIntersectsRect(this, rect);
  }

  /**
   * A method that returns the string representation of the circle
   * @returns
   */
  toString(): string {
    return `{ "position": ${this.position.toString()}, "radius": ${
      this.radius
    } }`;
  }
}
