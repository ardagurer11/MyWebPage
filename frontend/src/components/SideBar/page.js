import React from 'react';
import SideBarHeader from './sideBarHeader';
import SideBarContainer from './sideBarContainer';
import SideBarCart from './sideBarCart';

const SideBar = ({ isOpen, ToggleSideBar }) => {
    return (
        <div className={`flex flex-col bg-black fixed right-0 mt-[88px] mx-4 rounded-[28px] w-1/6 min-w-32 overflow-hidden transition-height duration-500 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
            <SideBarHeader />
            <SideBarContainer>
                <SideBarCart cartName={'Home'} ToggleSideBar={ToggleSideBar}/>
                <SideBarCart cartName={'About'} ToggleSideBar={ToggleSideBar}/>
                <SideBarCart cartName={'Projects'} ToggleSideBar={ToggleSideBar}/>
            </SideBarContainer>
        </div>
    );
}

export default SideBar;