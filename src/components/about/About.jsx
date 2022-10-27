import React from 'react'
import './about.css';
//import ME from"../../assets/img1.png";
//import {FaAward} from  'react-icons/fa'
const About = () =>{
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about __container'>
        <div className="about_me">
          <div className="about__me-image">
            {/* <img src={ME} alt="IMG"/> */}
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            {/* <FaAward></FaAward> */}
            <article className='about__card'>
              <h5>Experience</h5>
              <small></small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About