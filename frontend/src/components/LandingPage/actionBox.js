import React from 'react';
import Image from 'next/image';

const ActionBox = ({ name, description, action, refName }) => {
    return (
        <div className=" py-4 px-4 rounded-[28px] bg-lighter-dark-moss shadow-lg hover:scale-105 transition ease-in-out duration-300 my-3">
            <div className='flex flex-row'>
                <div className='w-[150px] h-[150px] bg-soft-beige mr-4 rounded-[18px]'>
                    <Image
                        src={'./retro-2.png'}
                        width={180}
                        height={180}
                        alt="retro"
                        style={{ objectFit: 'cover' }} 
                        
                    />
                </div>
                <div className='flex flex-col items-start justify-center max-w-[12rem] sm:max-w-[12rem] md:max-w-[20rem] pr-[4rem]'>
                    <div className="text-xl font-bold mb-3 text-soft-beige">
                        {name}
                    </div>
                    <div className="line-clamp-3 text-sm text-soft-beige mb-3 ">
                        {description}
                    </div>
                    <a className="text-pale-mint py-1 after:content-['_↗'] font-medium hover:opacity-50" href={refName}>
                        {action}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ActionBox;