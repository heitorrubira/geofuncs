import Box from '../Box';
import Sphere from '../Sphere';
import Vec3 from '../Vec3';

/**
 * Rotation on X and Y.
 * @param center
 * @param point
 * @param deg
 * @returns
 */
export const rotateXYAround3D = (
  center: Vec3,
  point: Vec3,
  deg: number
): Vec3 => {
  const dx = point.x - center.x;
  const dy = point.y - center.y;
  const dz = point.z - center.z;

  const theta = (deg * Math.PI) / 180;

  const x = dx * Math.cos(theta) - dy * Math.sin(theta) + center.x;
  const y = dx * Math.sin(theta) + dy * Math.cos(theta) + center.y;
  const z = dz; // Não há mudança na coordenada z após a rotação em torno do plano x-y

  return new Vec3(x, y, z);
};

export const distance3D = (a: Vec3, b: Vec3): number => {
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

  const distance = distance3D(new Vec3(x, y, z), sphere.center);
  return distance < sphere.radius;
};

export const sphereIntersectsSphere = (a: Sphere, b: Sphere): boolean => {
  const distance = distance3D(a.center, b.center);
  return distance < a.radius + b.radius;
};
