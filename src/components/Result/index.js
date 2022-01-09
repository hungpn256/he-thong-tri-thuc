import { Modal } from 'antd';
import React, { useContext } from 'react';
import { ModalContext } from '../../App';

const Result = ({ content, setContent }) => {
  return (
    <>
      <Modal
        title='Kết quả'
        centered
        visible={content?.length}
        onOk={() => setContent('')}
        onCancel={() => setContent('')}
        width={1000}
      >
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </Modal>
    </>
  );
};
export default Result;
