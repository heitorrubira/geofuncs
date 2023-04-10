import Box from './Box';
import Vec3 from './Vec3';
import { boxIntersectsSphere, sphereIntersectsSphere } from './utils';

/**
 * A Sphere segment class
 */
export default class Sphere {
  /** The 3D vector center */ public center: Vec3;
  /** The radius */ public radius: number;

  /**
   * The constructor function that creates a new instance of the Sphere class
   * @param min The min
   * @param max The max
   */
  constructor(center: Vec3, radius = 1) {
    this.center = center;
    this.radius = radius;
  }

  /**
   * Check if this intersects a box.
   * @param box
   * @returns
   */
  intersectsBox(box: Box): boolean {
    return boxIntersectsSphere(box, this);
  }

  /**
   * Check if this intersects a sphere.
   * @param sphere
   * @returns
   */
  intersectsSphere(sphere: Sphere): boolean {
    return sphereIntersectsSphere(this, sphere);
  }

  /**
   * A method that returns the string representation of the line
   * @returns
   */
  toString(): string {
    return `{ "center": ${this.center.toString()}, "radius": ${this.radius} }`;
  }
}
