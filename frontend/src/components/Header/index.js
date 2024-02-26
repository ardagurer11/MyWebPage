"use client"

import React, { useState } from 'react';
import HeaderContainer from './headerContainer';
import HeaderCart from './headerCart';
import LogoCart from './logoCart';
import HamburgerCart from './hamburgerCart';
import SideBar from '../SideBar';
import HeaderDropdownCart from './headerDropdownCart';
import DropdownCart from './dropdownCart';

// Define a Header component using an arrow function
const Header = () => {
    const [sideBarSwitch, setSideBarSwitch] = useState(false)

    const ToggleSideBar = (status) => {
        setSideBarSwitch(status)
    }

    return (
        <div className='flex justify-center'>
            <div className='flex flex-row bg-dark-moss fixed items-center justify-between w-[calc(100%-2rem)] my-4 rounded-full shadow-lg '>
                <div className='flex flex-row items-center'>
                    <div className=''>
                        <LogoCart />
                    </div>
                    <div className='border-[0.5px] border-soft-beige py-5 mr-4' />
                    <HeaderContainer>
                        <HeaderCart cartName={'Home'} refName={'/'} />
                        <HeaderDropdownCart cartName={'Projects'} refName={'/Projects'}>
                            <DropdownCart cartName={'GardGPT'} refName={'/Projects/GardGPT'}/>
                            <DropdownCart cartName={'Gard-E'} refName={'/Projects/GardE'}/>
                        </HeaderDropdownCart>
                        <HeaderCart cartName={'About'} refName={'/About'} />
                        <HeaderCart cartName={'AI Galery'} refName={'/AI_Galery'} />
                    </HeaderContainer>
                </div>
                <div className='mr-2'>
                    <HamburgerCart ToggleSideBar={ToggleSideBar} isOpen={sideBarSwitch} />
                </div>
            </div>
            <SideBar isOpen={sideBarSwitch} ToggleSideBar={ToggleSideBar} />
        </div>


    );
};

export default Header;