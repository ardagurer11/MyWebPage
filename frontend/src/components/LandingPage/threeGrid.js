import React from 'react';

const ThreeGrid = ({ children }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mx-[4rem] ">
            {children}
        </div>
    );
}

export default ThreeGrid;