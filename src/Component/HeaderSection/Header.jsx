import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import profileImg from "../../assets/Profile/profile-img.jpg";
import 'animate.css';

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

  const navLinkArr = [
    {
      href: "home",
      icon: <i class="fs-4 pe-2 bx bx-home"></i>,
      linkName: "Home",
    },
    {
      href: "about",
      icon: <i class="fs-4 pe-2 bx bx-user"></i>,
      linkName: "About",
    },
    {
      href: "resume",
      icon: <i class="fs-4 pe-2 bx bx-file-blank"></i>,
      linkName: "Resume",
    },
    {
      href: "portfolio",
      icon: <i class="fs-4 pe-2 bx bx-book-content"></i>,
      linkName: "Portfolio",
    },
    {
      href: "services",
      icon: <i class="fs-4 pe-2 bx bx-server"></i>,
      linkName: "Services",
    },
    {
      href: "contact",
      icon: <i class="fs-4 pe-2 bx bx-envelope"></i>,
      linkName: "Contact",
    },
  ];

  // state for hover in nav icons
  const [isHovered, setIsHovered] = useState("home");
  const [isActive, setIsActive] = useState("home");

  const handleHover = (name) => {
    setIsHovered(name);
  };

  const clickHandler = (name) => {
    setIsActive(name);
  };

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
            {navLinkArr.map((tab, index) => (
              <li key={index} className="d-flex align-items-center nav-item">
                <Link
                  to={tab.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`d-flex align-items-end navLink ${
                    isHovered === tab.icon ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleHover(tab.icon)}
                  onMouseLeave={() => setIsHovered("")}
                  onClick={() => clickHandler(tab.icon)}
                >
                  {tab.icon}
                  <span>{tab.linkName}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
