import React from 'react';

const SideBarCart = ({ cartName, ToggleSideBar }) => {
    return (
        <button className='py-2 px-8 my-1 mx-2 hover:bg-zinc-700 rounded-full transition-all duration-200 ease-in-out flex' onClick={ToggleSideBar}>
            <div className='text-white font-medium'>
                {cartName}
            </div>

        </button>
    );
}

export default SideBarCart;