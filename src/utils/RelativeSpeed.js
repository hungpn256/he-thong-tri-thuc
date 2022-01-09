import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';
import Trimf from './Trimf';

class RelativeSpeed extends MemberShipFunction {
  constructor() {
    super([
      new Trap('N', -9999, -9999, -5, 0),
      new Trimf('Z', -5, 0, 5),
      new Trap('P', 0, 5, 9999, 9999),
    ]);
  }
}
export default RelativeSpeed;
