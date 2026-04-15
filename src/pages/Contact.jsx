import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <div className='profile-container'>
          <img 
            src="src/assets/profile.png" 
            alt="profile pic"
            style={{
              width: '200px',
              height: '200px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            >
          </img>
          <br />
          <div className='profile-social-media'>
            <a href="https://www.instagram.com/mymannifaces">
              <FaInstagramSquare size={50} />
            </a>
            <a href="https://www.linkedin.com/in/mannivalencia/">
            <FaLinkedin size={50} />
            </a>
            <a href="https://github.com/mymannifaces">
              <FaGithubSquare size={50} />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact