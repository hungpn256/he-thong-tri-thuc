import React, { useContext, useState } from 'react'
import { Form, Input, Button, Radio, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { ModalContext } from '../../App';
export default function Target() {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const { visible, setVisible } = useContext(ModalContext)
    const onRequiredTypeChange = (props) => {
        setRequiredMarkType(props.requiredMarkValue);
        console.log(props);
    };
    const onSubmit = (data) => {
        console.log(data, 'sdas');
        setVisible(true)
    }
    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
            onFinish={onSubmit}
        >
            <Row gutter={[10, 10]}>
                <Col span={8}>
                    <Form.Item label="Field A" required tooltip="This is a required field" name="test">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Field B"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Field B"
                        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                    >
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Field A" required tooltip="This is a required field" name="test">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Field A" required tooltip="This is a required field" name="test">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Field A" required tooltip="This is a required field" name="test">
                        <Input placeholder="input placeholder" />
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form >
    )
}
