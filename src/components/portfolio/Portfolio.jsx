// eslint-disable-next-line
import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG1} alt="projectImage"></img>
          </div>
          <h3>News Hub</h3>
          <p className='paragraph text-light'>A short news web app that aggregates the latest news from various sources.</p>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/MuskanGarg24/News-Hub' className='btn'>Github</a>
            <a href='https://newzzzhub.netlify.app/' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG2} alt="projectImage"></img>
          </div>
          <h3>Crypto Tracker</h3>
          <p className='paragraph text-light'>A web app that allow users to look at the different cryptocurrencies being traded on the market, as well as monitor their current prices.</p>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/MuskanGarg24/Crypto-Tracker' className='btn'>Github</a>
            <a href='https://track-crypto-status.netlify.app/' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG3} alt="projectImage"></img>
          </div>
          <h3>Blog Site</h3>
          <p className='paragraph text-light'>A website where people can post their articles/blogs and share with the relevant audience.</p>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/MuskanGarg24/Blog-Site.git' className='btn'>Github</a>
            {/* <a href='' className='btn btn-primary'>Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio