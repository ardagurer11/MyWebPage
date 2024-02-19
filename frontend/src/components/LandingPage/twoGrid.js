import React from 'react';

const TwoGrid = ({ children }) => {
    return ( 
        <div className="grid grid-cols-auto md:grid-cols-2 sm:grid-cols-1">
        {children}
      </div>
     );
}
 
export default TwoGrid;