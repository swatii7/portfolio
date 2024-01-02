import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profileImg from "../../assets/Profile/profile-img.jpg";
import { FileEarmark, FileEarmarkFill, HouseFill, PersonFill } from "react-bootstrap-icons";
import 'boxicons'

export default function Header() {
  const socialLinkArr = [
    {
      href: "#",
      icon: faXTwitter,
    },
    {
      href: "#",
      icon: faFacebookF,
    },
    {
      href: "#",
      icon: faInstagram,
    },
    {
      href: "#",
      icon: faSkype,
    },
    {
      href: "#",
      icon: faLinkedinIn,
    },
  ];

  // const navLinkArr = [
  //   {
  //     icon: House,
  //     linkName: "Home",
  //   },
    // {
    //   icon: faUser,
    //   linkName: 'About'
    // },
    // {
    //   icon: resumeIcon,
    //   linkName: 'Resume'
    // },
    // {
    //   icon: portfolioIcon,
    //   linkName: 'Portfolio'
    // },
    // {
    //   icon: serviceIcon,
    //   linkName: 'Services'
    // },
    // {
    //   icon: contactIcon,
    //   linkName: 'Contact'
    // },
  // ];

  return (
    <header className="headerWrapper">
      <div className="d-flex flex-column">
        <div className="profilePicWrapper text-center align-items-center justify-content-center">
          <img src={profileImg} />
          <h1 className="text-light fs-4 font-poppins fw-semibold">
            Hitesh Chaudhary
          </h1>
        </div>
        <div className="text-center mt-3 socialLinks d-flex justify-content-between">
          {socialLinkArr.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="twitterLink text-light iconWrapper"
              
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <nav>
          <ul>
            {/* {navLinkArr.map((tab, index) => ( */}
              <li className="d-flex align-items-center" >
                <a className="text-light d-flex align-items-end navActive boxicon" onhover={()=> console.log(`helllo`)}>
                <box-icon name='home' color='#6f7180' ></box-icon>
                  <span className="ms-2">Home</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a className="text-light d-flex align-items-end navActive">
                <box-icon name='user' color='#6f7180' ></box-icon>
                  <span className="ms-2">About</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a className="text-light d-flex align-items-end navActive">
                <box-icon name='file-blank' color='#6f7180' ></box-icon>
                  <span className="ms-2">Resume</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a className="text-light d-flex align-items-end navActive">
                <box-icon name='book-content' color='#6f7180' ></box-icon>
                  <span className="ms-2">Portfolio</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a className="text-light d-flex align-items-end navActive">
                <box-icon name='server' color='#6f7180' ></box-icon>
                  <span className="ms-2">Services</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <a className="text-light d-flex align-items-end navActive">
                <box-icon name='envelope' color='#6f7180' ></box-icon>
                  <span className="ms-2">Contact</span>
                </a>
              </li>
            {/* ))} */}

          </ul>
        </nav>
      </div>
    </header>
  );
}
