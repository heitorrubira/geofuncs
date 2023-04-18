import Mat4 from '../src/Mat4';

describe('Mat4', () => {
  it('should create a valid Mat4 objects', () => {
    const mat1 = new Mat4(1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1);
    const mat2 = Mat4.identity();

    // mat1

    expect(mat1.m11).toBe(1);
    expect(mat1.m12).toBe(2);
    expect(mat1.m13).toBe(3);
    expect(mat1.m14).toBe(4);
    expect(mat1.m21).toBe(5);
    expect(mat1.m22).toBe(6);
    expect(mat1.m23).toBe(7);
    expect(mat1.m24).toBe(8);
    expect(mat1.m31).toBe(8);
    expect(mat1.m32).toBe(7);
    expect(mat1.m33).toBe(6);
    expect(mat1.m34).toBe(5);
    expect(mat1.m41).toBe(4);
    expect(mat1.m42).toBe(3);
    expect(mat1.m43).toBe(2);
    expect(mat1.m44).toBe(1);

    // mat2

    expect(mat2.m11).toBe(1);
    expect(mat2.m12).toBe(0);
    expect(mat2.m13).toBe(0);
    expect(mat2.m14).toBe(0);
    expect(mat2.m21).toBe(0);
    expect(mat2.m22).toBe(1);
    expect(mat2.m23).toBe(0);
    expect(mat2.m24).toBe(0);
    expect(mat2.m31).toBe(0);
    expect(mat2.m32).toBe(0);
    expect(mat2.m33).toBe(1);
    expect(mat2.m34).toBe(0);
    expect(mat2.m41).toBe(0);
    expect(mat2.m42).toBe(0);
    expect(mat2.m43).toBe(0);
    expect(mat2.m44).toBe(1);
  });

  it('toString() should return a valid string formated', () => {
    const mat = Mat4.identity();
    expect(mat.toString()).toEqual(`[
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1
]`);
  });
});
