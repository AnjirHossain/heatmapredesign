import React from 'react';

const Grid = ({ children, customStyles = {} }) => (
    <div style={{
        ...customStyles,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(50px, 1fr))'
    }}>
        {children}
    </div>
);

export default Grid;