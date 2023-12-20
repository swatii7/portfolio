import React from 'react'
import profileImg from '../../assets/Profile/profile-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Header() {
  return (
    
    <header className='headerWrapper'>
        <div className='d-flex flex-column'>
            <div className='profilePicWrapper text-center align-items-center justify-content-center'>
                <img src={profileImg} />
                <h1 className='text-light fs-4 font-poppins fw-semibold'>Hitesh Chaudhary</h1>
            </div>
            <div className='text-center mt-3 socialLinks justify-content-between'>
                <a href='#' className='twitterLink text-light'>
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='#' className='fbLink text-light'>
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href='#' className='fbLink text-light'>
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href='#' className='fbLink text-light'>
                <FontAwesomeIcon icon={faSkype} />
                </a>
                <a href='#' className='fbLink text-light'>
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    </header>
  )
}
