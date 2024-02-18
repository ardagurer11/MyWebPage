import React from 'react';

// Define a Header component using an arrow function
const SideBarContainer = ({ children }) => {
    return (
        <div className="flex flex-col mt-1 mb-8">
            {children}
        </div>
    );
};

export default SideBarContainer; 