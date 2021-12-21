import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';
import Trimf from './Trimf';

class RelativeSpeed extends MemberShipFunction {
  constructor() {
    super([
      new Trap('N', -9999, -9999, -0.02, 0),
      new Trimf('Z', -0.02, 0, 0.02),
      new Trap('P', 0, 0.02, 9999, 9999),
    ]);
  }
}
export default RelativeSpeed;
