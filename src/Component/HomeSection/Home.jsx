import React from 'react'
import Typewriter from 'typewriter-effect';
import About from '../AboutSection/About';
import 'animate.css';

export default function Home() {
  return (
    <>
    <section className='text-center d-flex justify-content-center align-items-center' id='home'>
     <div className='position-relative heroHeadingWrapper animate__animated animate__fadeIn'>
      <h1 className='text-white font-raleway fw-bold'>
        Hitesh Chaudhary
      </h1>
      <p className='text-white font-poppins d-flex'>
        I'm 
        <span className='ms-2'>
          <Typewriter
          options={{
            strings: ['Designer', 'Full Stack Developer', 'Mobile App Developer', 'Freelancer'],
            autoStart: true,
            loop: true,
            skipAddStyles: true,
          }}
          />
        </span>
      </p>
     </div>
    </section>
    <About />
    </>
  )
}
