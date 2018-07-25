import React from 'react';

const Col = ({ children }) => (
    <div style={{
      display: 'flex',
      flexFlow: 'column wrap',
    }}>
        {children}
    </div>
);

export default Col;