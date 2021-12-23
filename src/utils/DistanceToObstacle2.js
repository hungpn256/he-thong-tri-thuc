import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';

class DistanceToObstacle2 extends MemberShipFunction {
  constructor() {
    super([
      new Trap('Z', -9999, -9999, 1.5, 3),
      new Trap('S', 1.5, 3, 18.5, 20),
      new Trap('B', 18.5, 20, 9999, 9999),
    ]);
  }
}
export default DistanceToObstacle2;
