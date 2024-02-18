import React from 'react';

const FooterGridSection = ({ children }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex justify-start flex-col'>
                {children}
            </div>
        </div>
    );
}

export default FooterGridSection;