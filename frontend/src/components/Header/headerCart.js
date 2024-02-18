import React from 'react';

const HeaderCart = ({ cartName }) => {
    return (
        <button className='py-2 px-3 my-2 mx-1 hover:bg-zinc-700 rounded-full transition-all duration-200 ease-in-out'>
            <div className='text-white font-medium'>
                {cartName}
            </div>

        </button>
    );
}

export default HeaderCart;