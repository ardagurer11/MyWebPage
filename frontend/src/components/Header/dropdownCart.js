import React from 'react';

const DropdownCart = ({ cartName, ToggleSideBar, refName }) => {
    return (
        <a className='py-2 px-8 my-1 mx-2 hover:bg-lighter-dark-moss rounded-full transition-all duration-200 ease-in-out flex' onClick={ToggleSideBar} href={`${refName}`}>
            <div className='text-soft-beige font-medium'>
                {cartName}
            </div>

        </a>
    );
}

export default DropdownCart;