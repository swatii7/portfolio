import React from "react";
import profileImg from "../../assets/Profile/profile-img.jpg";
import {
  ChevronRight,
  EmojiSmile,
  Headset,
  JournalRichtext,
  People,
} from "react-bootstrap-icons";
import CommonCount from "../CommonComponent/CommonCount";

export default function About() {
  const detailListleftArr = [
    {
      title: "Birthday:",
      detail: "11 July 1994",
    },
    {
      title: "Years Of Experience:",
      detail: "5 Years+",
    },
    {
      title: "Mobile:",
      detail: "8219066628",
    },
    {
      title: "City:",
      detail: "Chandigarh, India",
    },
  ];

  const detailListRightArr = [
    {
      title: "Age:",
      detail: "29",
    },
    {
      title: "Degree:",
      detail: "B.Tech",
    },
    {
      title: "Email:",
      detail: "hiteshsartan7@gmail.com",
    },
    {
      title: "Freelancer:",
      detail: "Available",
    },
  ];

  const factsArr= [
    {
      icon: <EmojiSmile className="factsIcon" />,
      end: 232,
      label: 'Happy Clients',
    },
    {
      icon: <JournalRichtext className="factsIcon" />,
      end: 521,
      label: 'Projects',
    },
    {
      icon: <Headset className="factsIcon" />,
      end: 1453,
      label: 'Hours of Support',
    },
    {
      icon: <People className="factsIcon" />,
      end: 32,
      label: 'Hard Workers',
    },
  ]

  return (
    <>
      {/* about us section */}
      <section id="about" className="aboutSectionWrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 aboutHeading">
              <h2 className="fs-2 font-raleway position-relative">About</h2>
              <p className="customParaStyle">
                Fueling my journey is an unwavering passion for technology. From
                coding lines to architecting solutions, each keystroke is an
                expression of enthusiasm, turning challenges into opportunities
                and transforming visions into reality.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 profileImgWrapper animate__animated animate__fadeInLeft">
              <img src={profileImg} />
            </div>
            <div className="col-12 col-lg-8 introWrapper animate__animated animate__fadeInRight">
              <h3 className="fw-bold font-raleway">
                UI/UX Designer & Web Developer.
              </h3>
              <p className="fst-italic">
                My professional journey is a tapestry of experiences, each
                thread woven with lessons, challenges, and triumphs. From the
                classroom to the boardroom, I've embraced every opportunity to
                learn, grow, and contribute to the dynamic world of development.
              </p>
              <div className="row">
                <div className="col-12 col-lg-6 detailsList">
                  <ul>
                    {detailListleftArr.map((detail, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <ChevronRight className="listIcon" />
                        <strong>{detail.title}</strong>
                        <span>{detail.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-12 col-lg-6 detailsList">
                  <ul>
                    {detailListRightArr.map((detail, index) => (
                      <li key={index} className="d-flex align-items-center">
                        <ChevronRight className="listIcon" />
                        <strong>{detail.title}</strong>
                        <span>{detail.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="customParaStyle">
                In the ever-evolving landscape of technology, I embrace the
                spirit of continuous learning. Each challenge becomes a chance
                to expand my skill set, guided by a curiosity to explore new
                possibilities and a commitment to staying at the forefront of
                industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* facts section */}
      <section className="factsWrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 aboutHeading">
              <h2 className="fs-2 font-raleway position-relative">Facts</h2>
              <p className="customParaStyle">
                With a customer-centric approach, I navigate the intricacies of
                [your industry]. My focus is not just on delivering a product or
                service but on creating meaningful and memorable experiences
                that resonate with the needs and aspirations of the end-users.
              </p>
            </div>
          </div>
          <div className="row">
            {factsArr.map((facts, index)=>
            <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className="countBox">
              {facts.icon}
              <CommonCount end={facts.end} separator= "" />
              <p>
                <strong className="font-raleway">{facts.label}</strong>
              </p>
            </div>
            </div>
            )}
            
          </div>
        </div>
      </section>
      <section className="skillsWrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 aboutHeading">
              <h2 className="fs-2 font-raleway position-relative">Skills</h2>
              <p className="customParaStyle">
                With a customer-centric approach, I navigate the intricacies of
                [your industry]. My focus is not just on delivering a product or
                service but on creating meaningful and memorable experiences
                that resonate with the needs and aspirations of the end-users.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3"></div>
          </div>
        </div>
      </section>
    </>
  );
}
