import React, { useState } from 'react'
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
export default function Target() {
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    return (
        <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMarkValue: requiredMark }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
        >

            <Form.Item label="Field A" required tooltip="This is a required field">
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item
                label="Field B"
                tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
            >
                <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    )
}