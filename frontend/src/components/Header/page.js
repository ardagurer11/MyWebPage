"use client"

import React, { useState } from 'react';
import HeaderContainer from './headerContainer';
import HeaderCart from './headerCart';
import LogoCart from './logoCart';
import HamburgerCart from './hamburgerCart';
import SideBar from '../SideBar/page';

// Define a Header component using an arrow function
const Header = () => {
    const [sideBarSwitch, setSideBarSwitch] = useState(false)

    const ToggleSideBar = () => {
        setSideBarSwitch(!sideBarSwitch)
    }

    return (
        <div className='flex justify-center'>
            <div className='flex flex-row bg-black fixed items-center justify-between w-[calc(100%-2rem)] my-4 rounded-full'>
                <div className='flex flex-row items-center'>
                    <div className=''>
                        <LogoCart />
                    </div>
                    <div className='border-[0.5px] border-white py-5 mr-4'/>
                    <HeaderContainer>
                        <HeaderCart cartName={'Home'} />
                        <HeaderCart cartName={'Projects'} />
                        <HeaderCart cartName={'About'} />
                    </HeaderContainer>
                </div>
                <div className='mr-2'>
                    <HamburgerCart ToggleSideBar={ToggleSideBar} isOpen={sideBarSwitch}/>
                </div>
            </div>
            <SideBar isOpen={sideBarSwitch} ToggleSideBar={ToggleSideBar}/>
        </div>


    );
};

export default Header;