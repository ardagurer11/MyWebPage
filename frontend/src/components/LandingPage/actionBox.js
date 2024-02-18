import React from 'react';
import Image from 'next/image';

const ActionBox = ({ name, description, action, refName }) => {
    return (
        <div className=" py-4 px-4 rounded-[28px] bg-lighter-dark-moss shadow-lg hover:scale-105 transition ease-in-out duration-300 my-3">
            <div className='flex flex-row'>
                <div className='w-[150px] h-[150px] bg-soft-beige mr-4 rounded-[18px]'>

                </div>
                <div className='flex flex-col items-start justify-center max-w-[14rem]'>
                    <div className="text-xl font-bold mb-3 text-soft-beige">
                        {name}
                    </div>
                    <div className="line-clamp-3 text-sm text-soft-beige mb-3 ">
                        {description}
                    </div>
                    <button className="text-pale-mint  py-1 after:content-['_↗'] font-medium hover:opacity-50">
                        {action}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ActionBox;