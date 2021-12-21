import { Collapse } from 'antd';
import React from 'react';
import Target from '../../components/Target';
import Connering from '../../components/Connering';
import AvoidCollision from '../../components/AvoidCollision';
const { Panel } = Collapse;
export default function Home() {
  return (
    <div>
      <center className='my-5'>
        <h1> Hệ thống lái xe tự động</h1>
      </center>
      <div className='container'>
        <Collapse accordion>
          <Panel header='Đi tới mục tiêu' key='1'>
            <Target></Target>
          </Panel>
          <Panel header='Đi tới khúc cua' key='2'>
            <Connering />
          </Panel>
          <Panel header='Tránh va chạm' key='3'>
            <AvoidCollision></AvoidCollision>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
