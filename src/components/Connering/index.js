import { Button, Col, Form, InputNumber, Row } from 'antd';
import React, { useContext, userEffect } from 'react';
import { gotoConneringRadius } from '../../controllers/gotoConneringRadius';
import { toast } from 'react-toastify';
import { ModalContext } from '../../App';
export default function Connering() {
  const [form] = Form.useForm();
  const { setContent } = useContext(ModalContext);

  const onSubmit = (data) => {
    const result = gotoConneringRadius(data);
    setContent(
      `Góc lệch bánh xe ${
        Math.round(result.resultWheel * 100) / 100
      }, Góc đạp ga,phanh ${
        Math.round(result.resultPedal * 100) / 100
      }`,
    );
  };

  const generateData = () => {
    let str = '';
    for (let i = 0; i < 10; i++) {
      const data = {
        goc_lai: Math.random() * 130 - 65,
        goc_muc_tieu: Math.random() * 240 - 120,
        van_toc_hien_tai: Math.random() * 25,
        van_toc_tuong_doi: Math.random() * 2 - 1,
        ban_kinh_vong_quay: Math.random() * 40,
      };
      str += `Góc lái: ${data.goc_lai} <br/>
        goc_muc_tieu: ${data.goc_muc_tieu}, <br/>
        van_toc_hien_tai: ${data.van_toc_hien_tai},<br/>
        van_toc_tuong_doi: ${data.van_toc_tuong_doi},<br/>
        ban_kinh_vong_quay: ${data.ban_kinh_vong_quay},<br/>`;
      const result = gotoConneringRadius(data);
      str += `Góc quay bánh xe ${
        Math.round(result.resultWheel * 100) / 100
      }, Góc đạp ga,phanh ${
        Math.round(result.resultPedal * 100) / 100
      }<br/><br/><br/>`;
    }
    setContent(str);
  };

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onSubmit}
      onFinishFailed={() => {
        toast.error('Vui lòng nhập đúng yêu cầu');
      }}
      initialValues={{
        goc_lai: 0,
        goc_muc_tieu: 0,
        van_toc_hien_tai: 0,
        van_toc_tuong_doi: 0,
        ban_kinh_vong_quay: 0,
      }}
    >
      <Row gutter={[10, 10]}>
        <Col span={8}>
          <Form.Item
            label='Góc lái hiện tại (độ)'
            rules={[
              { required: true, message: 'Góc lái phải là số' },
              {
                type: 'number',
                min: -65,
                max: 65,
                message: 'Góc lái là số từ -65 đến 65',
              },
            ]}
            name='goc_lai'
          >
            <InputNumber
              placeholder='từ -65 đến 65 độ'
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Góc đến mục tiêu (độ)'
            rules={[
              {
                required: true,
                message: 'Góc đến mục tiêu phải là số',
              },
              {
                type: 'number',
                min: -120,
                max: 120,
                message: 'Góc đến mục tiêu là số từ -120 đến 120',
              },
            ]}
            name='goc_muc_tieu'
          >
            <InputNumber
              placeholder='từ -120 đến 120'
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Vận tốc hiện tại (m/s)'
            rules={[
              {
                required: true,
                message: 'Vận tốc hiện tại phải là số',
              },
              {
                type: 'number',
                min: 0,
                max: 25,
                message: 'Vận tốc hiện tại là số từ 0 đến 25',
              },
            ]}
            name='van_toc_hien_tai'
          >
            <InputNumber
              placeholder='từ 0 đến 25'
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Vận tốc tương đối (m/s)'
            rules={[
              {
                required: true,
                message: 'Vận tốc tương đối phải là số',
              },
              {
                type: 'number',
                min: -1,
                max: 1,
                message: 'Vận tốc tương đối là số từ -1 đến 1',
              },
            ]}
            name='van_toc_tuong_doi'
          >
            <InputNumber
              placeholder='từ -1 đến 1'
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label='Bán kính vòng quay (m)'
            rules={[
              {
                required: true,
                message: 'Bán kính vòng quay phải là số',
              },
              {
                type: 'number',
                min: 0,
                max: 40,
                message: 'Bán kính vòng quay là số từ 0 đến 40',
              },
            ]}
            name='ban_kinh_vong_quay'
          >
            <InputNumber
              placeholder='từ 0 đến 40'
              style={{ width: '100%' }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
        <Button className='m-3' type='primary' onClick={generateData}>
          GenerateData
        </Button>
      </Form.Item>
    </Form>
  );
}
