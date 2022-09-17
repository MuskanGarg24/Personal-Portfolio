import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    // eslint-disable-next-line
    <div className='header_socials'>  
      <a href='https://www.linkedin.com/in/muskangarg2409/' className='socialIcons'><BsLinkedin /></a>
      <a href='https://github.com/MuskanGarg24' className='socialIcons'><FaGithub /></a>
      <a href='https://twitter.com/muskan_2409' className='socialIcons'><FaTwitter /></a>
      <a href="https://www.instagram.com/muskangarg_2409/" className='socialIcons'><FaInstagram /></a>
    </div>
  )
}

export default HeaderSocials