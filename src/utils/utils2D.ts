import Circle from '../Circle';
import Line from '../Line';
import Rect from '../Rect';
import Vec2 from '../Vec2';

export const rotateAround2D = (
  center: Vec2,
  point: Vec2,
  deg: number
): Vec2 => {
  const dx = point.x - center.x;
  const dy = point.y - center.y;

  const theta = (deg * Math.PI) / 180;

  const x = dx * Math.cos(theta) - dy * Math.sin(theta) + center.x;
  const y = dx * Math.sin(theta) + dy * Math.cos(theta) + center.y;

  return new Vec2(x, y);
};

export const distance2D = (a: Vec2, b: Vec2): number => {
  const distX = b.x - a.x;
  const distY = b.y - a.y;
  return Math.sqrt(distX * distX + distY * distY);
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

export const lineIntersectsLine = (line1: Line, line2: Line): boolean => {
  const q =
    (line1.a.y - line2.a.y) * (line2.b.x - line2.a.x) -
    (line1.a.x - line2.a.x) * (line2.b.y - line2.a.y);
  const d =
    (line1.b.x - line1.a.x) * (line2.b.y - line2.a.y) -
    (line1.b.y - line1.a.y) * (line2.b.x - line2.a.x);

  if (d == 0) {
    return false;
  }

  const r = q / d;

  const g =
    (line1.a.y - line2.a.y) * (line1.b.x - line1.a.x) -
    (line1.a.x - line2.a.x) * (line1.b.y - line1.a.y);
  const s = g / d;

  if (r < 0 || r > 1 || s < 0 || s > 1) {
    return false;
  }

  return true;
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
  const { center, radius } = circle;
  const dist =
    Math.abs(
      (b.y - a.y) * center.x - (b.x - a.x) * center.y + b.x * a.y - b.y * a.x
    ) / length;

  return dist <= radius;
};

export const pointIntersectsCircle = (point: Vec2, circle: Circle): boolean => {
  const distance = distance2D(point, circle.center);
  return distance < circle.radius;
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
  const doubleDist = distance2D(a.center, b.center);
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
  const nearX = Math.max(rect.left, Math.min(circle.center.x, rect.right));
  const nearY = Math.max(rect.top, Math.min(circle.center.y, rect.bottom));
  const distance = distance2D(new Vec2(nearX, nearY), circle.center);
  return distance < circle.radius;
};
