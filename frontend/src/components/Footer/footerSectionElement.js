import React from 'react';

const FooterSectionElement = ({ name }) => {
    return (
        <a className={`after:content-['_↗'] hover:text-vibrant-teal`} href='/'>
            {name}
        </a>
    );
}

export default FooterSectionElement;