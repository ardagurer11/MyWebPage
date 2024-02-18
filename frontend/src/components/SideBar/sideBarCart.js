import React from 'react';

const SideBarCart = ({ cartName, ToggleSideBar, refName }) => {
    return (
        <a className='py-2 px-8 my-1 mx-2 hover:bg-lighter-dark-moss rounded-full flex' onClick={ToggleSideBar} href={`${refName}`}>
            <div className='text-soft-beige font-bold'>
                {cartName}
            </div>

        </a>
    );
}

export default SideBarCart;