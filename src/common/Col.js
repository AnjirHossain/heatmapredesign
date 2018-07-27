import React from 'react';

const Col = ({ children, customStyles }) => (
    <div style={{
      ...customStyles,
      display: 'flex',
      flexFlow: 'column wrap',
    }}>
        {children}
    </div>
);

export default Col;