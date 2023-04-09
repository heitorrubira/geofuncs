import Circle from '../Circle';
import Line from '../Line';
import Rect from '../Rect';
import Vec2 from '../Vec2';

export const doubleDistanceVec2 = (a: Vec2, b: Vec2): number => {
  const distX = b.x - a.x;
  const distY = b.y - a.y;
  return distX * distX + distY * distY;
};

export const distanceVec2 = (a: Vec2, b: Vec2): number => {
  return Math.sqrt(doubleDistanceVec2(a, b));
};

export const lineIntersectsPoint = (line: Line, point: Vec2): boolean => {
  const { a, b } = line;
  const { x, y } = point;
  const minX = Math.min(a.x, b.x);
  const maxX = Math.max(a.x, b.x);
  const minY = Math.min(a.y, b.y);
  const maxY = Math.max(a.y, b.y);
  return x >= minX && x <= maxX && y >= minY && y <= maxY;
};

//
// Those function to check if two lines intersects was based on this:
// https://www.geeksforgeeks.org/check-if-two-given-line-segments-intersect/
//

/**
 * Given three collinear points p, q, r, the function checks if
 * point q lies on line segment 'pr'
 * @param p
 * @param q
 * @param r
 * @returns
 */
const onSegment = (p: Vec2, q: Vec2, r: Vec2): boolean => {
  if (
    q.x <= Math.max(p.x, r.x) &&
    q.x >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) &&
    q.y >= Math.min(p.y, r.y)
  ) {
    return true;
  }
  return false;
};

/**
 * To find orientation of ordered triplet (p, q, r).
 * @param p
 * @param q
 * @param r
 * @returns 0 -> p, q and r are collinear, 1 -> Clockwise, 2 -> Counterclockwise
 */
const orientation = (p: Vec2, q: Vec2, r: Vec2): number => {
  // See https://www.geeksforgeeks.org/orientation-3-ordered-points/
  // for details of below formula.
  const val = (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
  if (val == 0) {
    return 0; // collinear
  }
  return val > 0 ? 1 : 2; // clock or counterclock wise
};

export const lineIntersectsLine = (line1: Line, line2: Line): boolean => {
  const o1 = orientation(line1.a, line1.b, line2.a);
  const o2 = orientation(line1.a, line1.b, line2.b);
  const o3 = orientation(line2.a, line2.b, line1.a);
  const o4 = orientation(line2.a, line2.b, line1.b);

  // General cases
  if (o1 != o2 && o3 != o4) {
    return true;
  }

  // Special Cases
  // line1.a, line1.b and line2.a are collinear and line2.a lies on segment p1q1
  if (o1 == 0 && onSegment(line1.a, line2.a, line1.b)) {
    return true;
  }

  // line1.a, line1.b and line2.b are collinear and line2.b lies on segment p1q1
  if (o2 == 0 && onSegment(line1.a, line2.b, line1.b)) {
    return true;
  }

  // line2.a, line2.b and line1.a are collinear and line1.a lies on segment p2q2
  if (o3 == 0 && onSegment(line2.a, line1.a, line2.b)) {
    return true;
  }

  // line2.a, line2.b and line1.b are collinear and line1.b lies on segment p2q2
  if (o4 == 0 && onSegment(line2.a, line1.b, line2.b)) {
    return true;
  }

  return false; // Doesn't fall in any of the above cases
};

export const lineIntersectsRect = (line: Line, rect: Rect): boolean => {
  const minX = Math.min(line.a.x, line.b.x);
  const maxX = Math.max(line.a.x, line.b.x);
  const minY = Math.min(line.a.y, line.b.y);
  const maxY = Math.max(line.a.y, line.b.y);

  if (
    maxX < rect.left ||
    minX > rect.right ||
    maxY < rect.top ||
    minY > rect.bottom
  ) {
    return false;
  }

  const leftTop = new Vec2(rect.left, rect.top);
  const rightTop = new Vec2(rect.right, rect.top);
  const leftBottom = new Vec2(rect.left, rect.bottom);
  const rightBottom = new Vec2(rect.right, rect.bottom);

  return (
    lineIntersectsLine(line, new Line(leftTop, rightTop)) ||
    lineIntersectsLine(line, new Line(leftBottom, rightBottom)) ||
    lineIntersectsLine(line, new Line(leftTop, leftBottom)) ||
    lineIntersectsLine(line, new Line(rightTop, rightBottom))
  );
};

export const lineIntersectsCircle = (line: Line, circle: Circle): boolean => {
  const { a, b, length } = line;
  const { position, radius } = circle;
  const dist =
    Math.abs(
      (b.y - a.y) * position.x -
        (b.x - a.x) * position.y +
        b.x * a.y -
        b.y * a.x
    ) / length;

  return dist <= radius;
};

export const pointIntersectsCircle = (point: Vec2, circle: Circle): boolean => {
  const doubleDist = doubleDistanceVec2(point, circle.position);
  return doubleDist <= Math.pow(circle.radius, 2);
};

export const pointIntersectsRect = (point: Vec2, rect: Rect): boolean => {
  return !(
    point.x > rect.right ||
    point.x < rect.left ||
    point.y > rect.bottom ||
    point.y < rect.top
  );
};

export const circleIntersectsCircle = (a: Circle, b: Circle): boolean => {
  const doubleDist = distanceVec2(a.position, b.position);
  const doubleRadius = a.radius + b.radius;
  return doubleDist < doubleRadius;
};

export const rectIntersectsRect = (a: Rect, b: Rect): boolean => {
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.top > b.bottom ||
    a.bottom < b.top
  );
};

export const circleIntersectsRect = (circle: Circle, rect: Rect): boolean => {
  const nearX = Math.max(rect.left, Math.min(circle.position.x, rect.right));
  const nearY = Math.max(rect.top, Math.min(circle.position.y, rect.bottom));
  const doubleDist = doubleDistanceVec2(
    new Vec2(nearX, nearY),
    circle.position
  );
  return doubleDist <= Math.pow(circle.radius, 2);
};
