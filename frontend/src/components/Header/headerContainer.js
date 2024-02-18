import React from 'react';

// Define a Header component using an arrow function
const HeaderContainer = ({ children }) => {
    return (
        <div className="flex flex-row">
            {children}
        </div>
    );
};

export default HeaderContainer; 

