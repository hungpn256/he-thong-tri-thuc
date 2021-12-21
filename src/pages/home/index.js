import { Collapse } from 'antd';
import React from 'react';
import Target from '../../components/Target';
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
          <Panel header='This is panel header 2' key='2'>
            <p>heello</p>
          </Panel>
          <Panel header='This is panel header 3' key='3'>
            <p>heello</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
