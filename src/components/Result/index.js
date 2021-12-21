import { Modal } from 'antd';
import React, { useContext } from 'react';
import { ModalContext } from '../../App';

const Result = () => {
  const { visible, setVisible } = useContext(ModalContext);
  return (
    <>
      <Modal
        title='Result'
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div>result</div>
      </Modal>
    </>
  );
};
export default Result;
