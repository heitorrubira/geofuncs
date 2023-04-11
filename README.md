# Geofuncs

This library aims to assist in Web or Node.js development, where it is necessary to apply basic geometric shapes, verify collisions between them, and apply mathematical formulas.

> Note: This is a work in progress, much of the code is being ported to TypeScript and will soon be available on NPM as well.

### 2D Axis & Classes

The 2D orientation is top-left (0, 0) to bottom-right (n, n).

```
.------> X
|
|
v
Y
```

**Vec2**: Point in two dimensions X, Y.
**Circle**: Circle with center and radius.
**Line**: Line segment with two points.
**Rect**: Rectangle with position, height, and width.

### 3D Axis & Classes

The 3D orientation is X is horizontal, Y vertical, and Z depth.

```
Y
^
|   Z
|  /
| /
. --------> X
```

**Vec3**: Point in three dimensions X, Y, and Z.
**Box**: Cubic-shaped with min and max positions.
**Sphere**: Spherical-shaped with center and radius.

### Backlog:
Under development...