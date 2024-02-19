import React from 'react';

const QuoteBox = ({ name, quote }) => {
    return ( 
        <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center flex-col max-w-[18rem] px-7 py-5 text-center rounded-[28px] my-[2rem] shadow-lg hover:scale-110 transition duration-300 ease-in-out min-h-[10rem]">
            <div className="text-lg font-bold mb-3">
              {name}
            </div>
            <div className="italic">
              {quote}
            </div>
          </div>
        </div>
     );
}
 
export default QuoteBox;