import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import Page from '../../components/common/page/page';
import META from '../../constants/meta';
import {Containerfluid, Container} from '../../components/common/container';
import Hamburger from '../../components/common/hamburgermenu';
import IntroBox from '../../components/common/introbox';
import FollowBox from '../../components/common/followbox';

class HomePage extends Component {
  render() {
    return(
      <Page {...META.home}>
        <div className="homepage">
          <img className="logo" src={'http://imabhi.in/bb6c8d30cdc34041f40aafe5aa55c297.png'} alt="Abhishar Jangir"/>
          <Containerfluid>
            <div className="intro-screen">
              <div className="watermark text-white">intro.</div>
              <Hamburger />
              <IntroBox />
              <FollowBox />
            </div>
          </Containerfluid>
          <Containerfluid>
            <div className="about-screen">
              <div className="watermark">hello.</div>
              <div className="about">
                <p>I am Abhishar Jangir, a Front End Developer based in India.having 3+ years of experience, based in India.</p>
                <p>In 2015, i started my career as Web Designer and today It's been more than 3+ years of experience in Web Development.</p>
                <p>Currently, I am working at Chimes Pvt. Ltd in India as UI Engineer.</p>
                <div className="anchor-btn">
                  <nav className="cl-effect-18">
                    <NavLink to="/" data-hover="Know More">read More</NavLink>
                    <NavLink to="/" data-hover="Know More">view work</NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </Containerfluid>
        </div>
      </Page>
    );
  }
}

HomePage.PT = {};

export default HomePage;
