import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const IntroBox = ({ introSequence, description }) => {
    return ( 
        <div className="flex flex-col sm:items-center md:items-start md:ml-[4rem]">
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
        </div>
     );
}
 
export default IntroBox;