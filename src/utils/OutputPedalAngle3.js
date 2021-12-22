import MemberShipFunction from './MemberShipFunction';
import Trap from './Trap';
import Trimf from './Trimf';

class OutputPedalAngle3 extends MemberShipFunction {
    constructor() {
        super([
            new Trap('NB', -9999, -9999, -2.5, 2),
            new Trap('NS', -2.5, -2, -0.5, 0),
            new Trimf('Z', -0.5, 0, 0.5),
            new Trap('PS', 0, 0.5, 2, 2.5),
            new Trap('PB', 2, 2.5, 9999, 9999),
        ]);
    }
}
export default OutputPedalAngle3;
