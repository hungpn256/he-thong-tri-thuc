import { Collapse } from 'antd';
import React from 'react';
import Target from '../../components/Target';
import Connering from '../../components/Connering';
import AvoidCollision from '../../components/AvoidCollision';
import { Table, Space, Typography } from 'antd';
const { Text } = Typography;

const { Panel } = Collapse;
export default function System() {
  const columns = [
    {
      title: 'Luật',
      dataIndex: 'rule',
      key: 'rule',
    },
    {
      title: 'Mô tả',
      dataIndex: 'des',
      key: 'des',
    },
  ];

  const data = [
    {
      rule: 'Hướng góc quay',
      des: 'Bên trái (-), bên phải (+)',
    },
    {
      rule: 'Dữ liệu',
      des: 'Điền đầy đủ các dữ liệu cần thiết cho các trường hợp tương ứng',
    },
  ];

  return (
    <div>
      <center className='my-5'>
        <h1> Hệ thống lái xe tự động</h1>
      </center>
      <div className='container'>
        <Text type='danger' code>
          Các luật của hệ thống
        </Text>
        <Table
          className='mt-2'
          columns={columns}
          dataSource={data}
          pagination={false}
        />
        <Collapse accordion className='mt-2'>
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
