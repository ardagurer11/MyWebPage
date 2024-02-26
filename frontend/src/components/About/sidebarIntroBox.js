import React from 'react';

const SidebarIntroBox = ({ children }) => {
    return (
        <div className='flex flex-col items-start space-y-2'>
            {children}
        </div>
    );
}

export default SidebarIntroBox;