import React, { useContext, useState } from 'react'
import { Form, Input, Button, Radio, Col, Row, InputNumber } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ModalContext } from '../../App';
import { toast } from 'react-toastify';
export default function AvoidCollision() {
    const [form] = Form.useForm();
    const { visible, setVisible } = useContext(ModalContext)
    const onRequiredTypeChange = (props) => {
        console.log(props);
    };
    const onSubmit = (data) => {
        console.log(data, 'sdas');
        toast.success("okee")
    }
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onSubmit}
            initialValues={{
                goc_lai: 0,
                goc_muc_tieu: 0,
                van_toc_hien_tai: 0,
                van_toc_tuong_doi: 0
            }}
        >
            <Row gutter={[10, 10]}>
                <Col span={8}>
                    <Form.Item
                        label="Góc lái hiện tại (độ)"
                        rules={[
                            { required: true, message: "Góc lái phải là số" },
                            { type: 'number', min: -65, max: 65, message: 'Góc lái là số từ -65 đến 65' }
                        ]}
                        name="goc_lai"
                    >
                        <InputNumber placeholder="từ -65 đến 65 độ" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Góc đến mục tiêu (độ)"
                        rules={[
                            { required: true, message: "Góc đến mục tiêu phải là số" },
                            { type: 'number', min: -120, max: 120, message: 'Góc đến mục tiêu là số từ -120 đến 120' }
                        ]}
                        name="goc_muc_tieu"
                    >
                        <InputNumber placeholder="từ -120 đến 120" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Vận tốc hiện tại (m/s)"
                        rules={[
                            { required: true, message: "Vận tốc hiện tại phải là số" },
                            { type: 'number', min: 0, max: 25, message: 'Vận tốc hiện tại là số từ 0 đến 25' }
                        ]}
                        name="van_toc_hien_tai"
                    >
                        <InputNumber placeholder="từ 0 đến 25" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Vận tốc tương đối (m/s)"
                        rules={[
                            { required: true, message: "Vận tốc tương đối phải là số" },
                            { type: 'number', min: -0.1, max: 0.1, message: 'Vận tốc tương đối là số từ -0.1 đến 0.1' }
                        ]}
                        name="van_toc_tuong_doi"
                    >
                        <InputNumber placeholder="từ -0.1 đến 0.1" style={{ width: '100%' }}/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form >
    )
}
