// eslint-disable-next-line
import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="projectImage"></img>
          </div>
          <h3>KwikFood</h3>
          <p className="paragraph text-light">
            {" "}
            Developed a web-based online canteen platform for universities to
            offer a seamless food ordering experience to users
          </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/MuskanGarg24/KwikFood-Online-Canteen"
              className="btn"
            >
              Github
            </a>
            <a href="https://youtu.be/gg5Y4RZiO-8" className="btn btn-primary">
              Video Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="projectImage"></img>
          </div>
          <h3>SocioAid</h3>
          <p className="paragraph text-light">
            A web-based platform to help users overcome social anxiety and build
            confidence
          </p>
          <div className="portfolio_item-cta">
            <a href="https://github.com/MuskanGarg24/SocioAid" className="btn">
              Github
            </a>
            <a
              href="https://www.youtube.com/watch?v=xJjl3OfhHtY"
              className="btn btn-primary"
            >
              Video Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="projectImage"></img>
          </div>
          <h3>Landing Page</h3>
          <p className="paragraph text-light">
            The user interface and visual design for a landing page.
          </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/MuskanGarg24/Landing-Page"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://testing-landing-page.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="projectImage"></img>
          </div>
          <h3>Crypto Tracker</h3>
          <p className="paragraph text-light">
            A web app that allow users to look at the different cryptocurrencies
            being traded on the market, as well as monitor their current prices.
          </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/MuskanGarg24/Crypto-Tracker"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://track-crypto-status.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="projectImage"></img>
          </div>
          <h3>News Hub</h3>
          <p className="paragraph text-light">
            A short news web app that aggregates the latest news from various
            sources.
          </p>
          <div className="portfolio_item-cta">
            <a href="https://github.com/MuskanGarg24/News-Hub" className="btn">
              Github
            </a>
            <a
              href="https://newzzzhub.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="projectImage"></img>
          </div>
          <h3>Time To Geek</h3>
          <p className="paragraph text-light">
            A website where people can post their tech articles/blogs and share
            with the relevant audience.
          </p>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/MuskanGarg24/Time-To-Geek.git"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://timetogeek.netlify.app/"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
