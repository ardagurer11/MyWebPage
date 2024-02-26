import React from 'react';

const ContentGrid = ({ children }) => {
    return (
        <div className="flex md:flex-row flex-col items-start ml-[4rem] mr-[4rem]">
            {children}
        </div>
    );
}

export default ContentGrid;