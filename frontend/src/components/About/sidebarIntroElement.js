import React from 'react';

const SidebarIntroElement = ({ name, value }) => {
    return (
        <div className='flex flex-row'>
            <div className='font-bold mr-[1rem]'>
                {name}
            </div>
            <div>
                {value}
            </div>
        </div>
    );
}

export default SidebarIntroElement;