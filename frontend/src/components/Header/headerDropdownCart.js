"use client"

import React, { useState } from 'react';
import DropdownContainer from './dropdownContainer';

const HeaderDropdownCart = ({ children, cartName, refName }) => {
    const [isOpen, setIsOpen] = useState(false)

    const navigateToRef = () => {
        window.location.href = refName; // Navigate to the URL specified in refName
    };

    return (
        <div className='flex py-2 px-3 my-2 mx-1 hover:bg-lighter-dark-moss rounded-full transition-all duration-[1000ms] ease-in-out justify-center cursor-pointer'
            onClick={navigateToRef}
            onMouseEnter={() => setIsOpen(true)} // Open dropdown on mouse enter
            onMouseLeave={() => setIsOpen(false)} // Close dropdown on mouse leave
        >
            <div className='text-soft-beige font-bold'>
                {cartName}
            </div>
            <div className={`fixed mt-[56px] bg-dark-moss mx-2 rounded-[28px] shadow-lg overflow-hidden transition-height duration-[500ms] ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
                <div className='mt-1' />
                <DropdownContainer>
                    {children}
                </DropdownContainer>
                <div className='mb-1' />
            </div>
        </div>
    );
}

export default HeaderDropdownCart;