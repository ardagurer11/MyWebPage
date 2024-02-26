import React from 'react';
import SideBarHeader from './sideBarHeader';
import SideBarContainer from './sideBarContainer';
import SideBarCart from './sideBarCart';
import SubSideBarCart from './subSideBarCart';

const SideBar = ({ isOpen, ToggleSideBar }) => {
    return (
        <div
            className={`flex flex-col bg-dark-moss shadow-lg fixed right-0 my-[88px] h-[calc(100%-10rem)] mx-4 rounded-[28px] w-1/6 min-w-32 overflow-hidden transition-height duration-700 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}
            onMouseLeave={() => ToggleSideBar(false)}
            onMouseEnter={() => ToggleSideBar(true)}
        >
            
            <SideBarContainer>
                <SideBarCart cartName={'Home'} ToggleSideBar={ToggleSideBar} refName={'/'} />
                
                <SideBarCart cartName={'Projects'} ToggleSideBar={ToggleSideBar} refName={'/Projects'} />
                <div className='ml-4'>
                    <SubSideBarCart cartName={'GardGPT'} ToggleSideBar={ToggleSideBar} refName={'/Projects/GardGPT'} />
                    <SubSideBarCart cartName={'Gard-E'} ToggleSideBar={ToggleSideBar} refName={'/Projects/GardE'} />
                </div>
                <SideBarCart cartName={'About'} ToggleSideBar={ToggleSideBar} refName={'/About'} />
                <SideBarCart cartName={'AI Galery'} ToggleSideBar={ToggleSideBar} refName={'/AI_Galery'} />
            </SideBarContainer>
            <div className='mb-1' />
        </div>
    );
}

export default SideBar;