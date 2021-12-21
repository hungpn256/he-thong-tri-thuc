import DistanceTarget from '../utils/DistanceTarget';
import RelativeSpeed from '../utils/RelativeSpeed';
import SpeedCurrent from '../utils/SpeedCurrent';
import SteeringAngleCurrent from '../utils/SteeringAngleCurrent';
import TargetAngle from '../utils/TargetAngle';

export const gotoTarget = (data) => {
  const steeringAngleCurrentAvailable =
    new SteeringAngleCurrent().getTrimfTrap(data.goc_lai);
  const targetAngleAvailable = new TargetAngle().getTrimfTrap(
    data.goc_muc_tieu,
  );
  const speedCurrentAvailable = new SpeedCurrent().getTrimfTrap(
    data.van_toc_hien_tai,
  );
  const relativeSpeedAvailable = new RelativeSpeed().getTrimfTrap(
    data.van_toc_tuong_doi,
  );
  const distanceToObstacleAvailable =
    new DistanceTarget().getTrimfTrap(data.khoang_cach);
  let result = [];
  steeringAngleCurrentAvailable.forEach((i1) => {
    targetAngleAvailable.forEach((i2) => {
      let label = '';
      if (i1.label === 'NB' && i2.label === 'NB') {
        label = 'Z';
      } else if (i1.label === 'NB' && i2.label === 'NM') {
        label = 'Z';
      } else if (i1.label === 'NB' && i2.label === 'Z') {
        label = 'PM';
      } else if (i1.label === 'NB' && i2.label === 'PM') {
        label = 'PB';
      } else if (i1.label === 'NB' && i2.label === 'PB') {
        label = 'PB';
      } else if (i1.label === 'NM' && i2.label === 'NB') {
        label = 'Z';
      } else if (i1.label === 'NM' && i2.label === 'NM') {
        label = 'Z';
      } else if (i1.label === 'NM' && i2.label === 'Z') {
        label = 'Z';
      } else if (i1.label === 'NM' && i2.label === 'PM') {
        label = 'PB';
      } else if (i1.label === 'NM' && i2.label === 'PB') {
        label = 'PB';
      } else if (i1.label === 'Z' && i2.label === 'NB') {
        label = 'NM';
      } else if (i1.label === 'Z' && i2.label === 'NM') {
        label = 'NM';
      } else if (i1.label === 'Z' && i2.label === 'Z') {
        label = 'Z';
      } else if (i1.label === 'Z' && i2.label === 'PM') {
        label = 'PM';
      } else if (i1.label === 'Z' && i2.label === 'PB') {
        label = 'PM';
      } else if (i1.label === 'PM' && i2.label === 'NB') {
        label = 'NB';
      } else if (i1.label === 'PM' && i2.label === 'NM') {
        label = 'NM';
      } else if (i1.label === 'PM' && i2.label === 'Z') {
        label = 'Z';
      } else if (i1.label === 'PM' && i2.label === 'PM') {
        label = 'Z';
      } else if (i1.label === 'PM' && i2.label === 'PB') {
        label = 'Z';
      } else if (i1.label === 'PB' && i2.label === 'NB') {
        label = 'NB';
      } else if (i1.label === 'PB' && i2.label === 'NM') {
        label = 'NM';
      } else if (i1.label === 'PB' && i2.label === 'Z') {
        label = 'NM';
      } else if (i1.label === 'PB' && i2.label === 'PM') {
        label = 'Z';
      } else if (i1.label === 'PB' && i2.label === 'PB') {
        label = 'Z';
      }
      const x = result.filter((i) => {
        return i.label === label;
      });
      const value = Math.min(
        i1.getValueY(data.goc_lai),
        i2.getValueY(data.goc_muc_tieu),
      );
      if (x.length) {
        x[0].value = Math.max(x[0].value, value);
      } else {
        result.push({
          label,
          value,
        });
      }
      console.log(result);
    });
  });
};
