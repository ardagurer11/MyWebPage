import React from 'react';

const Sidebar = ({ children }) => {
    return (
        <div className='flex flex-col md:items-start justify-center items-center h-full min-w-[17rem] ml-[2rem]'>
            {children}
        </div>
    );
}

export default Sidebar;