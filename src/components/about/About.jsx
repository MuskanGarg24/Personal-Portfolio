import React from "react";
import "./About.css";
import ME from "../../assets/me.jpeg";
import HeaderSocials from "../header/HeaderSocials";

const About = () => {
  return (
    <>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="aboutImage"></img>
            </div>
          </div>
          <div className="about_content">
            <p>
              Hey there!
              <br />
              <br />
              My name is Muskan Garg, and I am a driven third-year B.Tech. in
              Information Technology student at MAIT Delhi. I am passionate
              about software development and have worked as a full-stack
              developer intern to gain hands-on experience in the field.
              <br />
              <br />I am eager to apply my abilities and further develop my
              professional experience through various opportunities. My
              professional attitude is defined by my strong teamwork ethic and a
              constant desire to learn and grow.
            </p>
            <HeaderSocials />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
