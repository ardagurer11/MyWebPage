import React from 'react';

const InitialGrid = ({ children }) => {
    return (
        <div className='flex md:flex-row flex-col items-start my-[10rem] md:mx-[4rem] justify-center'>
            {children}
        </div>
    );
}

export default InitialGrid;