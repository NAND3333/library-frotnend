import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p><b>Email: </b>nandmath.kishor@gmail.com</p>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Name- Nand Kishor</p>
                        <p>Contact: +91 9451125998</p>
                    </div>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2024 copyright all right reserved</p>
            </div>
        </div>
    )
}

export default Footer