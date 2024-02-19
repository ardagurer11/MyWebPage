import React from 'react';
import FooterGridSection from './footerGridSection';
import FooterSectionHeader from './FooterSectionHeader';
import FooterSectionElement from './footerSectionElement';


const Footer = () => {
    return (
        <div className='flex justify-center bottom-0 border-t border-muted-coral mx-[1rem]'>
            <div className='w-[calc(100%-2rem)] my-4 rounded-[28px] grid md:grid-cols-4 gap-4 sm:grid-cols-1'>
                <FooterGridSection>
                    <FooterSectionHeader name={'Social Media'} />
                    <FooterSectionElement name={'Twitter'} />
                    <FooterSectionElement name={'Instagram'} />
                    <FooterSectionElement name={'Github'} />
                    <FooterSectionElement name={'LinkedIn'} />
                </FooterGridSection>
                <FooterGridSection>
                    <FooterSectionHeader name={'Sitemap'} />
                    <FooterSectionElement name={'Home'} />
                    <FooterSectionElement name={'Projects'} />
                    <FooterSectionElement name={'About'} />
                </FooterGridSection>
                <FooterGridSection>
                    <FooterSectionHeader name={'Contact'} />
                    <FooterSectionElement name={'Email: ardagurerr97@gmail.com'} />
                </FooterGridSection>
                <FooterGridSection>
                    <FooterSectionHeader name={'Quick Links'} />
                    <FooterSectionElement name={'GardGPT'} />
                    <FooterSectionElement name={'Gard-E'} />
                </FooterGridSection>
                <div className='mb-6'></div>
            </div>
        </div>
    );
}

export default Footer;