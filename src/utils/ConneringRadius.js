import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';
import Trimf from './Trimf';

class DirectionOfObstacle extends MemberShipFunction {
  constructor() {
    super([
      new Trimf('Z', 0, 3, 6),
      new Trimf('M', 3, 6, 9),
      new Trap('B', 6, 9, 9999, 9999),
    ]);
  }
}
export default DirectionOfObstacle;
