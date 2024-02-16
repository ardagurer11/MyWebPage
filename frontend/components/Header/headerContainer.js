import React from 'react';

// Define a Header component using an arrow function
const HeaderContainer = ({ children }) => {
    return (
        <div className="bg-zinc-400 w-full fixed">
            {children}
        </div>
    );
};

export default HeaderContainer; 

