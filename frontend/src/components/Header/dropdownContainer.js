import React from 'react';

// Define a Header component using an arrow function
const DropdownContainer = ({ children }) => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    );
};

export default DropdownContainer; 