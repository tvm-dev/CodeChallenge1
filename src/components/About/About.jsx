import React from 'react'

import './About.css';

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>

      <h2>About this CC</h2>
      <ul>
        <li><p>This is a test "Code Challenge" in React JS and Axios, for job interview. I hope i do well and get the job.
        </p></li>

        <li><p>All Data from this API is in the public domain and is available on GitHub</p></li>
      </ul>
      <div className='tvm'><br />
        <span>My Contacts</span>

        <p id='noColor'>E-mail:</p>
        <p>tvm.dev2015@gmail.com</p><br />
        <p>WhatsApp:</p>
        <p><a href='https://wa.me/5511961312020?text=Github' target="_blank"> +55 11961312020 ( Link )</a></p><br />
        <p>My website:</p>
        <p><a href='https://thiagoviana.tk/' target="_blank"> thiagoviana.tk ( Link )</a></p>
      </div>

    </div>
  )
}

export default About;