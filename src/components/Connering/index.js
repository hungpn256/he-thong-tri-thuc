import { Button, Col, Form, InputNumber, Row, Table } from 'antd';
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
                title: 'Bán kính vòng quay',
                dataIndex: 'ban_kinh_vong_quay',
                key: 'ban_kinh_vong_quay',
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
            // const data = {
            //     goc_lai: Math.random() * 130 - 65,
            //     goc_muc_tieu: Math.random() * 240 - 120,
            //     van_toc_hien_tai: Math.random() * 25,
            //     van_toc_tuong_doi: Math.random() * 2 - 1,
            //     ban_kinh_vong_quay: Math.random() * 40,
            // };
            let data = {
                goc_lai: Math.round((Math.random() * 130 - 65) * 100) / 100,
                goc_muc_tieu:
                    Math.round((Math.random() * 240 - 120) * 100) / 100,
                van_toc_hien_tai: Math.round(Math.random() * 25 * 100) / 100,
                van_toc_tuong_doi:
                    Math.round((Math.random() * 2 - 1) * 100) / 100,
                ban_kinh_vong_quay: Math.round(Math.random() * 40 * 100) / 100,
            };
            const result = gotoConneringRadius(data);
            data.result = result;
            dataTable.push(data)
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
