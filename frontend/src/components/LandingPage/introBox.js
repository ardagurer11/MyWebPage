import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const IntroBox = ({ introSequence, description }) => {
    return (
        <div className='flex justify-center items-center'>
            <div className="flex flex-col items-start justify-center">
                <div className="text-4xl font-[Courier] ">
                    <TypeAnimation
                        sequence={introSequence}
                        wrapper="div"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={0}
                    />
                </div>
                <div className=" font-medium text-lg my-12 leading-loose text-lighter-dark-moss tracking-wider text-justify max-w-[40rem]">
                    {description}

                </div>
                <a className='px-5 py-3 bg-muted-coral rounded-[28px] font-semibold text-white hover:scale-110 transition ease-in-out duration-300 shadow-lg' href='/Projects'>
                    {"Check Out Projects >"}
                </a>
            </div>

        </div>

    );
}

export default IntroBox;