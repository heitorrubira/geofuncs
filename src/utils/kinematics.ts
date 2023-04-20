import Vec2 from '../Vec2';
import { clamp, toDegrees, toRadians } from './base';

export type Limits = {
  min: number;
  max: number;
};

export const forwardKinematics = (
  L1: number,
  L2: number,
  angleA: number,
  angleB: number
): Vec2 => {
  const alpha = toRadians(angleA);
  const beta = toRadians(angleB);

  const x = L1 * Math.cos(alpha) + L2 * Math.cos(alpha + beta);
  const y = L1 * Math.sin(alpha) + L2 * Math.sin(alpha + beta);

  return new Vec2(x, y);
};

export const inverseKinematics = (
  L1: number,
  L2: number,
  pointTo: Vec2,
  angleALimits?: Limits,
  angleBLimits?: Limits
): { angleA: number; angleB: number } => {
  const deltaX = pointTo.x;
  const deltaY = pointTo.y;

  const D = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

  const cosTheta2 = (D * D - L1 * L1 - L2 * L2) / (2 * L1 * L2);
  const theta2 = Math.acos(clamp(cosTheta2, -1, 1));
  const alternativeTheta2 = -theta2;

  const cosTheta1 =
    (deltaX * (L1 + L2 * Math.cos(theta2)) + deltaY * L2 * Math.sin(theta2)) /
    (D * D);

  const sinTheta1 =
    (deltaY * (L1 + L2 * Math.cos(theta2)) - deltaX * L2 * Math.sin(theta2)) /
    (D * D);

  const theta1 = Math.atan2(sinTheta1, cosTheta1);

  const cosAlternativeTheta1 =
    (deltaX * (L1 + L2 * Math.cos(alternativeTheta2)) +
      deltaY * L2 * Math.sin(alternativeTheta2)) /
    (D * D);

  const sinAlternativeTheta1 =
    (deltaY * (L1 + L2 * Math.cos(alternativeTheta2)) -
      deltaX * L2 * Math.sin(alternativeTheta2)) /
    (D * D);

  const alternativeTheta1 = Math.atan2(
    sinAlternativeTheta1,
    cosAlternativeTheta1
  );

  const angleCandidates = [
    { angleA: toDegrees(theta1), angleB: toDegrees(theta2) },
    {
      angleA: toDegrees(alternativeTheta1),
      angleB: toDegrees(alternativeTheta2),
    },
  ];

  const validCandidates = angleCandidates.filter((candidate) => {
    return (
      candidate.angleA >= (angleALimits?.min ?? -359) &&
      candidate.angleA <= (angleALimits?.max ?? 359) &&
      candidate.angleB >= (angleBLimits?.min ?? -359) &&
      candidate.angleB <= (angleBLimits?.max ?? 359)
    );
  });

  if (validCandidates.length === 0) {
    throw new Error(
      "It's no possible to find a solution to the position target."
    );
  }

  return validCandidates[0];
};
