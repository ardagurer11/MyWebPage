import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import "../../app/globals.css"
import Footer from '@/components/Footer';
import InitialGrid from '@/components/About/initialGrid';
import ContentGrid from '@/components/About/contentGrid';
import Content from '@/components/About/content';
import Sidebar from '@/components/About/sidebar';
import SidebarIntroBox from '@/components/About/sidebarIntroBox';
import SidebarIntroHeader from '@/components/About/sidebarIntroHeader';
import SidebarIntroElement from '@/components/About/sidebarIntroElement';
import SidebarContentBox from '@/components/About/sidebarContentBox';

const About = () => {
    return (
        <main className="flex min-h-screen flex-col bg-soft-beige">
            <div className="absolute top-0 left-0 w-full h-full opacity-15">
                <Image
                    src={'./bg.png'}
                    quality={100}
                    fill // Changed to fill for covering the entire area

                />
            </div>
            <div className='relative z-[10]'>
                <Header />
                <InitialGrid>
                    <ContentGrid>
                        <div className='flex-shrink-0 hover:scale-125 transition-all duration-300 ease-in-out'>
                            <Image
                                src={'./arda_pokemon.png'}
                                width={210}
                                height={200}
                                alt="retro"

                            />
                        </div>
                        <Content>
                            <div className='flex flex-col mt-[2rem]'>
                                <div className='text-4xl font-bold mb-[2rem]'>
                                    Who is Arda Gürer?
                                </div>
                                <div className=''>
                                    My journey began at Saint Joseph High School, where my fascination with technology and its potential to transform lives took root. This passion led me to pursue and successfully earn a degree in Computer Science from Purdue University, where I honed my skills in programming, system analysis, and software development. My academic achievements provided a strong foundation, but it was my hands-on experiences that truly shaped my career path.
                                </div>

                            </div>
                            <div className='flex flex-col mt-[12rem]'>
                                <div className='text-2xl font-bold mb-[2rem]'>
                                    Education
                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>Purdue University</text>, West Lafayette, IN, USA — Bachelor of Science in Computer Science (Concentration in Machine Intelligence)
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        August 2016 - May 2022
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        Cumulative GPA, 3.05/4.00
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        Bachelor of Science GPA 3.15/4.00
                                    </div>

                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>Saint Joseph High School</text>, Kadıköy, Istanbul, Turkey — Science/Math
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        September 2011 - June 2016
                                    </div>

                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>Private Şişli Terakki Middle School</text>, Akatlar, Istanbul, Turkey
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        September 2003 - June 2011
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col mt-[6rem]'>
                                <div className='text-2xl font-bold mb-[2rem]'>
                                    Work Experiences
                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>CPM Software</text>, Turkey —Internship
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        July 2018 - August 2018
                                    </div>
                                    <div className='text-sm opacity-50 font-semibold'>
                                        I had experince with SQL.
                                    </div>


                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>Keskinoğlu Poultry</text>, Turkey — Internship
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        June 2019 - July 2019
                                    </div>
                                    <div className='text-sm opacity-50 font-semibold'>
                                        I Worked at the IT department. I had experience with various tasks such as setting up windows servers and fixing physical devices.
                                    </div>

                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>Inveon</text>, Turkey — Mobile Developer
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        September 2019 - December 2019
                                    </div>
                                    <div className='text-sm opacity-50 font-semibold'>
                                        I coded mobile applications for e-commerce sites such as Watsons and Evkur in React Native. I had mostly done frontend development.
                                    </div>
                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>Ford Otosan</text>, Turkey — Data Scientist
                                    </div>
                                    <div className='text-sm opacity-50'>
                                        March 2023 - Present
                                    </div>
                                    <div className='text-sm opacity-50 font-semibold'>
                                        {'[FILL]'}
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col mt-[6rem]'>
                                <div className='text-2xl font-bold mb-[2rem]'>
                                    Projects
                                </div>
                                <div className='mb-[2rem]'>
                                    <div className='text-lg mb-[0.5rem]'>
                                        <text className='font-bold'>Formal</text> — Mobile Application
                                    </div>
                                    <div className='text-sm opacity-50 font-semibold'>
                                        It is an app in which one can browse events near her as well as host and manage events. It is a social platform for people to interact, communicate, and meet. I programmed the application in React Native (a javascript framework) and used Firebase as my backend services.
                                    </div>
                                </div>
                            </div>
                        </Content>
                    </ContentGrid>
                    <div className='border border-black self-stretch'>

                    </div>
                    <Sidebar>
                        <SidebarIntroBox>
                            <SidebarIntroHeader title={'Personal Information'} />
                            <SidebarIntroElement name={'Date Of Birth'} value={'July 12th, 1997'} />
                            <SidebarIntroElement name={'Nationality'} value={'Turkish'} />
                            <SidebarIntroElement name={'Location'} value={'Istanbul, Turkey'} />
                            <SidebarIntroElement name={'Email'} value={'ardagurerr97@gmail.com'} />
                            <SidebarIntroElement name={'Sex'} value={'Male'} />
                        </SidebarIntroBox>
                        <SidebarContentBox>
                            <div className='font-bold text-2xl mb-[2rem]'>
                                Computer Literature
                            </div>
                        </SidebarContentBox>
                        <SidebarContentBox>
                            <div className='font-bold text-2xl mb-[2rem]'>
                                Languages
                            </div>
                        </SidebarContentBox>
                    </Sidebar>
                </InitialGrid>
                <Footer />
            </div>





        </main>
    );
}

export default About;