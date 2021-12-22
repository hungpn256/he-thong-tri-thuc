import SteeringAngleCurrent from "../utils/SteeringAngleCurrent";
import TargetAngle from "../utils/TargetAngle";
import SpeedCurrent from "../utils/SpeedCurrent";
import RelativeSpeed from "../utils/RelativeSpeed";
import ConneringRadius from "../utils/ConneringRadius";
import OutputWheelAngle1 from '../utils/OutputPedalAngle1';
import OutputPendalAngle1 from '../utils/OutputPedalAngle1';

export const gotoConneringRadius = (data) => {
    const steeringAngleCurrentAvailable = new SteeringAngleCurrent().getTrimfTrap(data.goc_lai)
    const targetAngleAvailable = new TargetAngle().getTrimfTrap(data.goc_muc_tieu)
    const speedCurrentAvailable = new SpeedCurrent().getTrimfTrap(data.van_toc_hien_tai)
    const relativeSpeedAvailable = new RelativeSpeed().getTrimfTrap(data.van_toc_tuong_doi)
    const conneringRadiusAvailable = new ConneringRadius().getTrimfTrap(data.ban_kinh_vong_quay)
    const outputWheelAngle1 = new OutputWheelAngle1()
    const outputPendalAngle1 = new OutputPendalAngle1()

    let resultPedal = []
    steeringAngleCurrentAvailable.forEach((i1) => {
        conneringRadiusAvailable.forEach((i2) => {
            relativeSpeedAvailable.forEach((i3) => {
                let label = ''
                if (i1.label === 'Z' && i2.label === 'S' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'Z' && i2.label === 'S' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'Z' && i2.label === 'S' && i3.label === 'P') {
                    label = 'Z'
                } else if (i1.label === 'Z' && i2.label === 'M' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'Z' && i2.label === 'M' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'Z' && i2.label === 'M' && i3.label === 'P') {
                    label = 'Z'
                } else if (i1.label === 'Z' && i2.label === 'B' && i3.label === 'N') {
                    label = 'PS'
                } else if (i1.label === 'Z' && i2.label === 'B' && i3.label === 'Z') {
                    label = 'PS'
                } else if (i1.label === 'Z' && i2.label === 'B' && i3.label === 'P') {
                    label = 'PS'
                } else if (i1.label === 'S' && i2.label === 'S' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'S' && i2.label === 'S' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'S' && i2.label === 'S' && i3.label === 'P') {
                    label = 'NS'
                } else if (i1.label === 'S' && i2.label === 'M' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'S' && i2.label === 'M' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'S' && i2.label === 'M' && i3.label === 'P') {
                    label = 'Z'
                } else if (i1.label === 'S' && i2.label === 'B' && i3.label === 'N') {
                    label = 'PS'
                } else if (i1.label === 'S' && i2.label === 'B' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'S' && i2.label === 'B' && i3.label === 'P') {
                    label = 'Z'
                } else if (i1.label === 'M' && i2.label === 'S' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'M' && i2.label === 'S' && i3.label === 'Z') {
                    label = 'NS'
                } else if (i1.label === 'M' && i2.label === 'S' && i3.label === 'P') {
                    label = 'NS'
                } else if (i1.label === 'M' && i2.label === 'M' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'M' && i2.label === 'M' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'M' && i2.label === 'M' && i3.label === 'P') {
                    label = 'NS'
                } else if (i1.label === 'M' && i2.label === 'B' && i3.label === 'N') {
                    label = 'PS'
                } else if (i1.label === 'M' && i2.label === 'B' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'M' && i2.label === 'B' && i3.label === 'P') {
                    label = 'Z'
                } else if (i1.label === 'B' && i2.label === 'S' && i3.label === 'N') {
                    label = 'NS'
                } else if (i1.label === 'B' && i2.label === 'S' && i3.label === 'Z') {
                    label = 'NS'
                } else if (i1.label === 'B' && i2.label === 'S' && i3.label === 'P') {
                    label = 'NS'
                } else if (i1.label === 'B' && i2.label === 'M' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'B' && i2.label === 'M' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'B' && i2.label === 'M' && i3.label === 'P') {
                    label = 'NS'
                } else if (i1.label === 'B' && i2.label === 'B' && i3.label === 'N') {
                    label = 'Z'
                } else if (i1.label === 'B' && i2.label === 'B' && i3.label === 'Z') {
                    label = 'Z'
                } else if (i1.label === 'B' && i2.label === 'B' && i3.label === 'P') {
                    label = 'Z'
                }
                if (label !== '') {
                    const x = resultPedal.filter((i) => {
                        return i.label === label;
                    });
                    const value = Math.min(
                        i1.getValueY(data.van_toc_hien_tai),
                        i2.getValueY(data.ban_kinh_vong_quay),
                        i3.getValueY(data.van_toc_tuong_doi)
                    );
                    if (x.length) {
                        x[0].value = Math.max(x[0].value, value);
                    } else {
                        resultPedal.push({
                            label,
                            value,
                        });
                    }
                }
            })
        })
    })

    let resultAngle = []
    steeringAngleCurrentAvailable.forEach((i1) => {
        targetAngleAvailable.forEach((i2) => {
            let label = ''
            if (i1.label === 'NB' && i2.label === 'NB') {
                label = 'Z'
            } else if (i1.label === 'NB' && i2.label === 'NM') {
                label = 'Z'
            } else if (i1.label === 'NB' && i2.label === 'Z') {
                label = 'PM'
            } else if (i1.label === 'NB' && i2.label === 'PM') {
                label = 'PB'
            } else if (i1.label === 'NB' && i2.label === 'PB') {
                label = 'PB'
            } else if (i1.label === 'NM' && i2.label === 'NB') {
                label = 'Z'
            } else if (i1.label === 'NM' && i2.label === 'NM') {
                label = 'Z'
            } else if (i1.label === 'NM' && i2.label === 'Z') {
                label = 'Z'
            } else if (i1.label === 'NM' && i2.label === 'PM') {
                label = 'PB'
            } else if (i1.label === 'NM' && i2.label === 'PB') {
                label = 'PB'
            } else if (i1.label === 'Z' && i2.label === 'NB') {
                label = 'NM'
            } else if (i1.label === 'Z' && i2.label === 'NM') {
                label = 'NM'
            } else if (i1.label === 'Z' && i2.label === 'Z') {
                label = 'Z'
            } else if (i1.label === 'Z' && i2.label === 'PM') {
                label = 'PM'
            } else if (i1.label === 'Z' && i2.label === 'PB') {
                label = 'PM'
            } else if (i1.label === 'PM' && i2.label === 'NB') {
                label = 'NB'
            } else if (i1.label === 'PM' && i2.label === 'NM') {
                label = 'NM'
            } else if (i1.label === 'PM' && i2.label === 'Z') {
                label = 'Z'
            } else if (i1.label === 'PM' && i2.label === 'PM') {
                label = 'Z'
            } else if (i1.label === 'PM' && i2.label === 'PB') {
                label = 'Z'
            } else if (i1.label === 'PB' && i2.label === 'NB') {
                label = 'NB'
            } else if (i1.label === 'PB' && i2.label === 'NM') {
                label = 'NM'
            } else if (i1.label === 'PB' && i2.label === 'Z') {
                label = 'NM'
            } else if (i1.label === 'PB' && i2.label === 'PM') {
                label = 'Z'
            } else if (i1.label === 'PB' && i2.label === 'PB') {
                label = 'Z'
            }
            if (label !== '') {
                const x = resultAngle.filter((i) => {
                    return i.label === label
                });
                const value = Math.min(
                    i1.getValueY(data.goc_lai),
                    i2.getValueY(data.goc_muc_tieu),
                );
                if (x.length) {
                    x[0].value = Math.max(x[0].value, value)
                } else {
                    resultAngle.push({
                        label,
                        value,
                    })
                }
            }
        })
    })

    console.log(resultAngle);
    console.log(resultPedal);
}