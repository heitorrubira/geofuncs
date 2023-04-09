import { distanceVec2 } from './utils';

/**
 * A 2D vector class
 */
export default class Vec2 {
  /** The x-coordinate of the vector */ public x: number;
  /** The y-coordinate of the vector */ public y: number;

  /**
   * The constructor function that creates a new instance of the Vec2 class
   * @param x
   * @param y
   */
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * A static method that returns a zero vector
   * @returns
   */
  static zero(): Vec2 {
    return new Vec2(0, 0);
  }

  /**
   * A static method that returns a vector with all components equal to one
   * @returns
   */
  static one(): Vec2 {
    return new Vec2(1, 1);
  }

  /**
   * A static method that adds two vectors and returns the result
   * @param a
   * @param b
   * @returns
   */
  static add(a: Vec2, b: Vec2): Vec2 {
    return new Vec2(a.x + b.x, a.y + b.y);
  }

  /**
   * A static method that subtracts two vectors and returns the result
   * @param a
   * @param b
   * @returns
   */
  static sub(a: Vec2, b: Vec2): Vec2 {
    return new Vec2(a.x - b.x, a.y - b.y);
  }

  /**
   * A static method that multiplies a vector by a scalar and returns the result
   * @param v
   * @param k
   * @returns
   */
  static scalar(v: Vec2, k: number): Vec2 {
    return new Vec2(v.x * k, v.y * k);
  }

  /**
   * A static method that calculates the Euclidean distance between two vectors
   * @param a
   * @param b
   * @returns
   */
  static distance(a: Vec2, b: Vec2): number {
    return distanceVec2(a, b);
  }

  /**
   * A method that returns the string representation of the vector
   * @returns
   */
  toString(): string {
    return `{ "x": ${this.x}, "y": ${this.y} }`;
  }
}
