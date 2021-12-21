import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';
import Trimf from './Trimf';

class SteeringAngleCurrent extends MemberShipFunction {
  constructor() {
    super([
      new Trap('NB', -9999, -9999, -48, -32),
      new Trap('NM', -48, -32, -16, 0),
      new Trimf('Z', -16, 0, 16),
      new Trap('PM', 0, 16, 32, 48),
      new Trap('PB', 32, 48, 9999, 9999),
    ]);
  }
}
export default SteeringAngleCurrent;
