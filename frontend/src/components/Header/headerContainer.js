import React from 'react';

// Define a Header component using an arrow function
const HeaderContainer = ({ children }) => {
    return (
        <div className="flex flex-row hidden md:flex">
            {children}
        </div>
    );
};

export default HeaderContainer; 

