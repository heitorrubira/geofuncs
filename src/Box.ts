import Sphere from './Sphere';
import Vec3 from './Vec3';
import { boxIntersectsBox, boxIntersectsSphere } from './utils';

/**
 * A Line segment class
 */
export default class Box {
  /** The 3D vector min */ public min: Vec3;
  /** The 3D vector max */ public max: Vec3;

  /**
   * The constructor function that creates a new instance of the Box class
   * @param min The min
   * @param max The max
   */
  constructor(min: Vec3, max: Vec3) {
    this.min = min;
    this.max = max;
  }

  get minX(): number {
    return Math.min(this.min.x, this.max.x);
  }
  get maxX(): number {
    return Math.max(this.min.x, this.max.x);
  }

  get minY(): number {
    return Math.min(this.min.y, this.max.y);
  }
  get maxY(): number {
    return Math.max(this.min.y, this.max.y);
  }

  get minZ(): number {
    return Math.min(this.min.z, this.max.z);
  }
  get maxZ(): number {
    return Math.max(this.min.z, this.max.z);
  }

  /**
   * Check if this intersects a box.
   * @param box
   * @returns
   */
  intersectsBox(box: Box): boolean {
    return boxIntersectsBox(this, box);
  }

  /**
   * Check if this intersects a sphere.
   * @param sphere
   * @returns
   */
  intersectsSphere(sphere: Sphere): boolean {
    return boxIntersectsSphere(this, sphere);
  }

  /**
   * A method that returns the string representation of the line
   * @returns
   */
  toString(): string {
    return `{ "min": ${this.min.toString()}, "max": ${this.max.toString()} }`;
  }
}
