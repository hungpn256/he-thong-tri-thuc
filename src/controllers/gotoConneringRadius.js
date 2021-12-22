import SteeringAngleCurrent from "../utils/SteeringAngleCurrent";
import TargetAngle from "../utils/TargetAngle";
import SpeedCurrent from "../utils/SpeedCurrent";
import RelativeSpeed from "../utils/RelativeSpeed";
import ConneringRadius from "../utils/ConneringRadius";

export const gotoConneringRadius = (data) => {
    const steeringAngleCurrentAvailable = new SteeringAngleCurrent().getTrimfTrap(data.goc_lai)
    const targetAngleAvailable = new TargetAngle().getTrimfTrap(data.goc_muc_tieu)
    const speedCurrentAvailable = new SpeedCurrent().getTrimfTrap(data.van_toc_hien_tai)
    const relativeSpeedAvailable = new RelativeSpeed().getTrimfTrap(data.van_toc_tuong_doi)
    const conneringRadiusAvailable = new ConneringRadius().getTrimfTrap(data.ban_kinh_vong_quay)

    let result = []
    steeringAngleCurrentAvailable.forEach((i1) => {
        conneringRadiusAvailable.forEach((i2) => {
            relativeSpeedAvailable.forEach((i3) => {
                let label = ''
                if (i1.label === '' && i2.label === '' && i3.label === '') {
                    label = ''
                }
            })
        })
    })
}