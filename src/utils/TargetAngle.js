import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';
import Trimf from './Trimf';

class TargetAngle extends MemberShipFunction {
  constructor() {
    super([
      new Trap('NB', -9999, -9999, -40, -34),
      new Trap('NM', -86, -75, 11, 0),
      new Trimf('Z', -11, 0, 11),
      new Trap('PM', 0, 11, 75, 86),
      new Trap('PB', 34, 40, 9999, 9999),
    ]);
  }
}
export default TargetAngle;
