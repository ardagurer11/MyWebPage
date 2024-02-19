import React from 'react';

const HamburgerCart = ({ ToggleSideBar, isOpen }) => {

    const lineClasses = "h-0.5 w-6 my-0.5 rounded-full bg-soft-beige transition ease transform duration-700";

    return (
        <button
            className="flex flex-col h-10 w-16 justify-center items-center group hover:bg-lighter-dark-moss rounded-full transition ease transform duration-500"
            onMouseEnter={() => ToggleSideBar(true)}
            onMouseLeave={() => ToggleSideBar(false)}
        >
            <div className={`${lineClasses} ${isOpen ? "rotate-45 translate-y-1.5 group-hover:opacity-100" : "group-hover:opacity-100"}`} />
            <div className={`${lineClasses} ${isOpen ? "opacity-0" : "group-hover:opacity-100"}`} />
            <div className={`${lineClasses} ${isOpen ? "-rotate-45 -translate-y-1.5 group-hover:opacity-100" : "group-hover:opacity-100"}`} />
        </button>
    );
}

export default HamburgerCart;