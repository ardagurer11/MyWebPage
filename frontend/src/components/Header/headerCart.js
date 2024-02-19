import React from 'react';

const HeaderCart = ({ cartName, refName }) => {
    return (
        <a className='py-2 px-3 my-2 mx-1 hover:bg-lighter-dark-moss rounded-full transition-all duration-500 ease-in-out' href={`${refName}`}>
            <div className='text-soft-beige font-bold'>
                {cartName}
            </div>

        </a>
    );
}

export default HeaderCart;