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
  /** The 2D vector center */ public center: Vec2;
  /** The radius */ public radius: number;

  /**
   * The constructor function that creates a new instance of the Circle class
   * @param center The center
   * @param radius The radius
   */
  constructor(center: Vec2, radius = 1) {
    this.center = center;
    this.radius = radius;
  }

  /**
   * A static method that returns a circle with 0 center and 1 of radius.
   * @returns
   */
  static zeroPosRadiusOne(): Circle {
    return new Circle(Vec2.zero());
  }

  /**
   * Check if this intersects a point.
   * @param point
   * @returns
   */
  intersectsPoint(point: Vec2): boolean {
    return pointIntersectsCircle(point, this);
  }

  /**
   * Check if this intersects a circle.
   * @param circle
   * @returns
   */
  intersectsCircle(circle: Circle): boolean {
    return circleIntersectsCircle(circle, this);
  }

  /**
   * Check if this intersects a rectangle.
   * @param rect
   * @returns
   */
  intersectsRect(rect: Rect): boolean {
    return circleIntersectsRect(this, rect);
  }

  /**
   * A method that returns the string representation of the circle
   * @returns
   */
  toString(): string {
    return `{ "center": ${this.center.toString()}, "radius": ${this.radius} }`;
  }
}
