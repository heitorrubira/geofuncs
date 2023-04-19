import Vec2 from '../src/Vec2';
import { fixedNum } from '../src/utils';
import { forwardKinematics, inverseKinematics } from '../src/utils/kinematics';

describe('kinematics', () => {
  it('inverseKinematics() should return the right position', () => {
    const L1 = 100;
    const L2 = 100;
    const pointTo = new Vec2(57.36, 18.08);

    const { angleA, angleB } = inverseKinematics(L1, L2, pointTo);
    expect(fixedNum(angleA)).toBe(89.994725835);
    expect(fixedNum(angleB)).toBe(-144.999516097);
  });

  it('forwardKinematics() should return a valid angles A and B for a position', () => {
    const result = forwardKinematics(100, 100, 90, 45);

    expect(fixedNum(result.x)).toBe(-70.710678119);
    expect(fixedNum(result.y)).toBe(170.710678119);
  });
});
