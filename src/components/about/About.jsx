import React from 'react';
import "./About.css";
import ME from '../../assets/me.jpeg'
import HeaderSocials from '../header/HeaderSocials';


const About = () => {
  return (
    <>
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about_container'>
          <div className='about_me'>
            <div className='about_me-image'>
              <img src={ME} alt='about image'></img>
            </div>
          </div>
          <div className='about_content'>
            <p>
              Hey there!
              <br /><br />
              I am Muskan Garg and I am pursuing B.Tech in Information Technology from Maharaja Agrasen Institute Of Technology,  Delhi . I am a Full Stack Web Developer.<br /><br />
              Currently, I am working on my Data Structures and Algorithms skills. I am passionate about learning new technologies and I believe in gaining new skills and experiences from working on projects.
              <br /><br />
              Teamwork and never stop learning attitude towards everything defines me.
            </p>
            <HeaderSocials/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;