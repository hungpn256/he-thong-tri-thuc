import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';

class DistanceTarget extends MemberShipFunction {
  constructor() {
    super([
      new Trap('Z', -9999, -9999, 5, 10),
      new Trap('S', 0, 10, 20, 30),
      new Trap('M', 20, 50, 110, 140),
      new Trap('B', 110, 140, 9999, 9999),
    ]);
  }
}

export default DistanceTarget;
