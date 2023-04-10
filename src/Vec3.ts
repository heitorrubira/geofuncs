import { distanceVec3 } from './utils';

/**
 * A 3D vector class
 */
export default class Vec3 {
  /** The x-coordinate of the vector */ public x: number;
  /** The y-coordinate of the vector */ public y: number;
  /** The z-coordinate of the vector */ public z: number;

  /**
   * The constructor function that creates a new instance of the Vec3 class
   * @param x
   * @param y
   * @param z
   */
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * A static method that returns a zero vector
   * @returns
   */
  static zero(): Vec3 {
    return new Vec3(0, 0, 0);
  }

  /**
   * A static method that returns a vector with all components equal to one
   * @returns
   */
  static one(): Vec3 {
    return new Vec3(1, 1, 1);
  }

  /**
   * A static method that adds two vectors and returns the result
   * @param a
   * @param b
   * @returns
   */
  static add(a: Vec3, b: Vec3): Vec3 {
    return new Vec3(a.x + b.x, a.y + b.y, a.z + b.z);
  }

  /**
   * A static method that subtracts two vectors and returns the result
   * @param a
   * @param b
   * @returns
   */
  static sub(a: Vec3, b: Vec3): Vec3 {
    return new Vec3(a.x - b.x, a.y - b.y, a.z - b.z);
  }

  /**
   * A static method that multiplies a vector by a scalar and returns the result
   * @param v
   * @param k
   * @returns
   */
  static scalar(v: Vec3, k: number): Vec3 {
    return new Vec3(v.x * k, v.y * k, v.z * k);
  }

  /**
   * A static method that calculates the Euclidean distance between two vectors
   * @param a
   * @param b
   * @returns
   */
  static distance(a: Vec3, b: Vec3): number {
    return distanceVec3(a, b);
  }

  /**
   * A method that returns the string representation of the vector
   * @returns
   */
  toString(): string {
    return `{ "x": ${this.x}, "y": ${this.y}, "z": ${this.z} }`;
  }
}
