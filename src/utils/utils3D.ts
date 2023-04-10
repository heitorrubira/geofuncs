import Vec3 from '../Vec3';
import Box from '../Box';
import Sphere from '../Sphere';

export const distanceVec3 = (a: Vec3, b: Vec3): number => {
  const distX = b.x - a.x;
  const distY = b.y - a.y;
  const distZ = b.z - a.z;
  return Math.sqrt(distX * distX + distY * distY + distZ * distZ);
};

export const boxIntersectsBox = (a: Box, b: Box): boolean => {
  if (a.maxX >= b.minX && a.minX <= b.maxX) {
    if (a.maxY < b.minY || b.minY > b.maxY) {
      return false;
    }

    return a.maxZ >= b.minZ && a.minZ <= b.maxZ;
  }
  return false;
};

export const boxIntersectsSphere = (box: Box, sphere: Sphere): boolean => {
  const x = Math.max(box.minX, Math.min(sphere.center.x, box.maxX));
  const y = Math.max(box.minY, Math.min(sphere.center.y, box.maxY));
  const z = Math.max(box.minZ, Math.min(sphere.center.z, box.maxZ));

  const distance = distanceVec3(new Vec3(x, y, z), sphere.center);
  return distance < sphere.radius;
};

export const sphereIntersectsSphere = (a: Sphere, b: Sphere): boolean => {
  const distance = distanceVec3(a.center, b.center);
  return distance < a.radius + b.radius;
};
