import React, { useContext, useState } from 'react'
import { Form, Input, Button, Radio, Col, Row, InputNumber } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ModalContext } from '../../App';
import { toast } from 'react-toastify';
export default function Target() {
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
                van_toc_tuong_doi: 0,
                khoang_cach: 0
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
                            { required: true, message: "Góc lái phải là số" },
                            { type: 'number', min: -120, max: 120, message: 'Góc lái là số từ -120 đến 120' }
                        ]}
                        name="goc_muc_tieu"
                    >
                        <InputNumber placeholder="từ -120 đến 120" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Vận tốc hiện tại (m/s)"
                        required
                        name="van_toc_hien_tai"
                    >
                        <InputNumber placeholder="từ 0 đến 25" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Vận tốc tương đối (m/s)"
                        required
                        name="van_toc_tuong_doi"
                    >
                        <Input placeholder="từ -0.1 đến 0.1" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Khoảng cách đến mục tiêu (m)"
                        required
                        name="khoang_cach"
                    >
                        <Input placeholder="từ 0 đến 300" min={0} max={300} />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form >
    )
}
