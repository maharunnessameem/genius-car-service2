import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <Footer className='text-center mt-5'>
            <p><small>copyright @ {year}</small></p>
        </Footer>
    );
};

export default Footer;