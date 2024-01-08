import React from 'react'

export default function Resume() {
  return (
   <section id='resume' className='resumeSectionWrapper'>
   <div className='container'>
   <div className="row">
            <div className="col-12 resumeHeading">
              <h2 className="fs-2 font-raleway position-relative">Resume</h2>
              <p className="customParaStyle">
              I am a user-centric developer, driven by the philosophy that technology should enhance and simplify the user experience. My designs prioritize usability, accessibility, and delight, creating digital landscapes where users feel at home.
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-6'>
                <h3 className='resumeTitle fw-bold'>Summary</h3>
                <div className='resumeItem'>
                    <h4 className='text-uppercase font-poppins'>Hitesh Chaudhary</h4>
                    <p>
                        <em>In the realm of web development/ app development, I am a code poet, weaving logic and creativity to compose elegant solutions. Each project is a canvas, and every line of code tells a story of innovation and functionality.</em>
                    </p>
                    <ul>
                        <li>Chandigarh, Punjab, India</li>
                        <li>(91) 82190 66628</li>
                        <li>hiteshsartan7@gmail.com</li>
                    </ul>
                </div>
                <h3 className='resumeTitle fw-bold'>Education</h3>
                <div className='resumeItem'>
                    <h4 className='text-uppercase font-poppins'>bachelor of technology</h4>
                    <h5 className='fs-6 font-raleway'>2012-2016</h5>
                    <p>
                      <em>Dev Bhumi Group of Institutes, Himachal Pradesh (India)</em>
                      </p>
                    <p></p>
                </div>
            </div>
          </div>
   </div>
   </section>
  )
}
