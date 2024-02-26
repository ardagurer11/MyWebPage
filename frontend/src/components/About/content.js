import React from 'react';

const Content = ({ children }) => {
    return (
        <div className='md:ml-[4rem] flex flex-col justify-center text-justify'>
            {children}
        </div>
    );
}

export default Content;