import React from 'react';

const Document = () => {
  return (
    <div style={{ height: 'calc(100vh - 60px)' }}>
      <iframe
        src='https://docs.google.com/document/d/1pKZDY1tRgQrUM-lv77_fCGzIGl_CglXLdCnK5tdYGQ0'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowfullscreen=''
        loading='lazy'
      ></iframe>
    </div>
  );
};

export default Document;
