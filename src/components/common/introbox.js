import React from 'react';
import {NavLink} from 'react-router-dom';

const IntroBox = (props) => {
  return (
    <div className="intro-box">
      <div className="intro">
        <span className="name">Abhishar <b>Jangir</b>,</span><br/>
        <p className="designation">a front end developer</p>
        <p className="place">based in India.</p>
        <p className="mt-md-2 mt-xs-2 mt-lg-2 mt-sm-2">
          I have 3 years of experience in front end development <br/>
          & currently working at Chimes Pvt. Ltd.
        </p>
        <div className="anchor-btn">
          <nav className="cl-effect-18">
            <NavLink to="/" data-hover="Know More">Know More</NavLink>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default IntroBox;
