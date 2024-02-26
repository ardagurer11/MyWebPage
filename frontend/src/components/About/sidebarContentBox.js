import React from 'react';

const SidebarContentBox = ({ children }) => {
    return (
        <div className='flex flex-col items-start space-y-2 mt-[6rem]'>
            {children}
        </div>
    );
}

export default SidebarContentBox;