import React from 'react';
import SocialMedias from './SocialMedias.js';
import Copyright from '../utils/images/Copyright.png'
import '../utils/global/css/global.css'

export default function Footer () {
    return (
        <footer>
            <div>
                <h6 className='footer__text'>
                    This web app is developed by <span className="developer__name"><b>Girlie Quindao Razon</b></span>
                </h6>
                <SocialMedias/>
                <p className="copyright__message">
                    Copyright <img className='copyright__icon' src={ Copyright }
                         alt='Copyright icon'/> 2021 <b>My-TODO-List</b> Web App. All rights reserved.
                </p>
            </div>
        </footer>
    )
}