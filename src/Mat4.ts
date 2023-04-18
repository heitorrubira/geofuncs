/* Geomatrix - XNA4 Reimplementation for Desktop Platforms
 * Copyright 2009-2023 Ethan Lee and the MonoGame Team
 *
 * Released under the Microsoft Public License.
 * See LICENSE for details.
 */

/*
 * Derived from code by the Mono.Xna Team (Copyright 2006).
 */

/**
 * A 4x4 Matrix.
 */
export default class Mat4 {
  m11: number;
  m12: number;
  m13: number;
  m14: number;
  m21: number;
  m22: number;
  m23: number;
  m24: number;
  m31: number;
  m32: number;
  m33: number;
  m34: number;
  m41: number;
  m42: number;
  m43: number;
  m44: number;

  constructor(
    m11: number,
    m12: number,
    m13: number,
    m14: number,
    m21: number,
    m22: number,
    m23: number,
    m24: number,
    m31: number,
    m32: number,
    m33: number,
    m34: number,
    m41: number,
    m42: number,
    m43: number,
    m44: number
  ) {
    this.m11 = m11;
    this.m12 = m12;
    this.m13 = m13;
    this.m14 = m14;
    this.m21 = m21;
    this.m22 = m22;
    this.m23 = m23;
    this.m24 = m24;
    this.m31 = m31;
    this.m32 = m32;
    this.m33 = m33;
    this.m34 = m34;
    this.m41 = m41;
    this.m42 = m42;
    this.m43 = m43;
    this.m44 = m44;
  }

  static identity(): Mat4 {
    return new Mat4(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }

  toString(): string {
    return `[
  ${this.m11}, ${this.m12}, ${this.m13}, ${this.m14},
  ${this.m21}, ${this.m22}, ${this.m23}, ${this.m24},
  ${this.m31}, ${this.m32}, ${this.m33}, ${this.m34},
  ${this.m41}, ${this.m42}, ${this.m43}, ${this.m44}
]`;
  }
}
