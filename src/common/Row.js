import React from 'react';

const Row = ({ children }) => (
    <div style={{
      display: 'flex',
      flexFlow: 'row wrap',
    }}>
        {children}
    </div>
);

export default Row;