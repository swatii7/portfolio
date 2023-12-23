import React from 'react'
import profileImg from '../../assets/Profile/profile-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faSkype, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import homeIcon from '../../assets/Profile/home.png'
import userIcon from '../../assets/Profile/user.png'
import resumeIcon from '../../assets/Profile/file.png'
import portfolioIcon from '../../assets/Profile/panel-left.png'
import serviceIcon from '../../assets/Profile/server.png'
import contactIcon from '../../assets/Profile/mail.png'

export default function Header() {

  const socialLinkArr= [
    {
      href:'#',
      icon:faXTwitter,
  },
  {
    href:'#',
    icon:faFacebookF,
},
{
  href:'#',
  icon:faInstagram,
},
{
  href:'#',
  icon:faSkype,
},
{
  href:'#',
  icon:faLinkedinIn,
},

]

const navLinkArr=[
  {
    icon: homeIcon,
    linkName: 'Home'
  },
  {
    icon: userIcon,
    linkName: 'About'
  },
  {
    icon: resumeIcon,
    linkName: 'Resume'
  },
  {
    icon: portfolioIcon,
    linkName: 'Portfolio'
  },
  {
    icon: serviceIcon,
    linkName: 'Services'
  },
  {
    icon: contactIcon,
    linkName: 'Contact'
  },

]

  return (
    
    <header className='headerWrapper'>
        <div className='d-flex flex-column'>
            <div className='profilePicWrapper text-center align-items-center justify-content-center'>
                <img src={profileImg} />
                <h1 className='text-light fs-4 font-poppins fw-semibold'>Hitesh Chaudhary</h1>
            </div>
            <div className='text-center mt-3 socialLinks d-flex justify-content-between'>
              {socialLinkArr.map((link,index)=>
              <a key={index} href={link.href} className='twitterLink text-light iconWrapper'>
              <FontAwesomeIcon icon={link.icon} />
              </a>
              )}
                
            </div>
            <nav>
              <ul>
                {navLinkArr.map((link, index)=>
                 <li key={index} className='d-flex align-items-center'>
                 <a className='text-light d-flex align-items-center navActive'>
                 <img src={link.icon} className='me-2' />
                   <span>{link.linkName}</span>
                 </a>
               </li>
                )}
             

              </ul>
            </nav>
        </div>
    </header>
  )
}
