import { Button, Col, Form, InputNumber, Row, Table } from 'antd';
import React, { useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { gotoTarget } from '../../controllers/gotoTarget';
import SteeringAngleCurrent from '../../utils/SteeringAngleCurrent';
import { ModalContext } from '../../App';
export default function Target() {
    const [form] = Form.useForm();
    const { setContent } = useContext(ModalContext);

    const onSubmit = (data) => {
        const result = gotoTarget(data);
        setContent(
            `${result.resultWheel === 0 ? "Giữ nguyên góc bánh xe" : `Cần xoay góc bánh xe sang bên ${result.resultWheel > 0 ? 'phải' : 'trái'
                } một góc: ${Math.abs(result.resultWheel).toFixed(
                    2,
                )} độ`}, và ${result.resultPedal > 0
                    ? 'ấn ga thêm một góc: ' +
                    Math.abs(result.resultPedal).toFixed(2) +
                    ' độ'
                    : result.resultPedal === 0
                        ? 'giữ nguyên chân ga'
                        : 'nhả ga ấn phanh thêm một góc: ' +
                        Math.abs(result.resultPedal).toFixed(2) +
                        ' độ'
            }`,
        );
    };

    const generateData = () => {
        const columns = [
            {
                title: 'Góc lái',
                dataIndex: 'goc_lai',
                key: 'goc_lai',
            },
            {
                title: 'Góc tới mục tiêu',
                dataIndex: 'goc_muc_tieu',
                key: 'goc_muc_tieu',
            },
            {
                title: 'Vận tốc hiện tại',
                dataIndex: 'van_toc_hien_tai',
                key: 'van_toc_hien_tai',
            },
            {
                title: 'Vận tốc tương đối',
                dataIndex: 'van_toc_tuong_doi',
                key: 'van_toc_tuong_doi',
            },
            {
                title: 'Khoảng cách',
                dataIndex: 'khoang_cach',
                key: 'khoang_cach',
            },
            {
                title: 'Kết luận',
                dataIndex: 'result',
                key: 'result',
                render: function (result) {
                    return `${result.resultWheel === 0 ? "Giữ nguyên góc bánh xe" : `Cần xoay góc bánh xe sang bên ${result.resultWheel > 0 ? 'phải' : 'trái'
                        } một góc: ${Math.abs(result.resultWheel).toFixed(
                            2,
                        )} độ`}, và ${result.resultPedal > 0
                            ? 'ấn ga thêm một góc: ' +
                            Math.abs(result.resultPedal).toFixed(2) +
                            ' độ'
                            : result.resultPedal === 0
                                ? 'giữ nguyên chân ga'
                                : 'nhả ga ấn phanh thêm một góc: ' +
                                Math.abs(result.resultPedal).toFixed(2) +
                                ' độ'
                        }`;
                },
            },
        ];
        let dataTable = [];
        for (let i = 0; i < 10; i++) {
            let data = {
                goc_lai: Math.round((Math.random() * 100 - 50) * 100) / 100,
                goc_muc_tieu:
                    Math.round((Math.random() * 240 - 120) * 100) / 100,
                van_toc_hien_tai: Math.round(Math.random() * 25 * 100) / 100,
                van_toc_tuong_doi:
                    Math.round((Math.random() * 5 - 2.5) * 100) / 100,
                khoang_cach: Math.round(Math.random() * 300 * 100) / 100,
            };

            const result = gotoTarget(data);
            data.result = result;
            dataTable.push(data);
        }
        const table = (
            <Table
                className='mt-2'
                columns={columns}
                dataSource={dataTable}
                pagination={false}
            />
        );
        setContent(table);
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
                khoang_cach: 20,
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
                                min: -50,
                                max: 50,
                                message: 'Góc lái là số từ -50 đến 50',
                            },
                        ]}
                        name='goc_lai'
                    >
                        <InputNumber
                            placeholder='từ -50 đến 50 độ'
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
                                min: -5,
                                max: 5,
                                message: 'Vận tốc tương đối là số từ -5 đến 5',
                            },
                        ]}
                        name='van_toc_tuong_doi'
                    >
                        <InputNumber
                            placeholder='từ -5 đến 5'
                            style={{ width: '100%' }}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label='Khoảng cách đến mục tiêu (m)'
                        rules={[
                            {
                                required: true,
                                message: 'Khoảng cách đến mục tiêu phải là số',
                            },
                            {
                                type: 'number',
                                min: 0,
                                max: 300,
                                message:
                                    'Khoảng cách đến mục tiêu là số từ 0 đến 300',
                            },
                        ]}
                        name='khoang_cach'
                    >
                        <InputNumber
                            placeholder='từ 0 đến 300'
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
