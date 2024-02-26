import React from 'react';

const SidebarIntroHeader = ({ title }) => {
    return (
        <div className='flex font-bold text-2xl mb-[2rem]'>
            {title}
        </div>
    );
}

export default SidebarIntroHeader;