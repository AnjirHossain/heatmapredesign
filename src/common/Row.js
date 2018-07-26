import React from 'react';

const Row = ({ children, customStyles }) => (
    <div style={{
        ...customStyles,
        display: 'flex',
        flexFlow: 'row wrap',
    }}>
        {children}
    </div>
);

export default Row;