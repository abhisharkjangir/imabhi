import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import Page from '../../components/common/page/page';
import META from '../../constants/meta';
import {Containerfluid, Container} from '../../components/common/container';
import Hamburger from '../../components/common/hamburgermenu';
import IntroBox from '../../components/common/introbox';
import FollowBox from '../../components/common/followbox';
import Workcard from '../../components/common/workcard';

import Frameworks from '../../assets/imgs/frameworks.png';
import Thirdparty from '../../assets/imgs/thirdparty.png';
import Responsive from '../../assets/imgs/responsive.png';
import Documented from '../../assets/imgs/documented.png';
import Javascript from '../../assets/imgs/javascript.png';
import Html5 from '../../assets/imgs/html5.svg';
import Nodejs from '../../assets/imgs/nodejs.svg';
import Reactjs from '../../assets/imgs/react.png';
import Bootstrap from '../../assets/imgs/bootstrap.png';
import Redux from '../../assets/imgs/redux.png';
import Css3 from '../../assets/imgs/css3.png';
import Angular from '../../assets/imgs/angular.png';
import Work1 from '../../assets/imgs/work1.png';

// import L from 'react-leaflet';

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
                <p>I am Abhishar Jangir, a Front End Developer based in India.</p>
                <p>In 2015, I started my career as Web Designer and today I have more than 3+ years of experience in Web Development.</p>
                <p>Currently, I am working at Chimes Pvt. Ltd in India as UI Engineer.</p>
                <div className="anchor-btn">
                  <nav className="cl-effect-11">
                    <NavLink to="/" data-hover="read More">read More</NavLink>
                  </nav>
                </div>
              </div>
            </div>
          </Containerfluid>
          <Containerfluid>
            <div className="work-screen">
              <div className="watermark text-white">work.</div>
              <div className="work-list">
                <Workcard img={Work1} name="Medzin" no="01"/>
                <Workcard img={Work1} name="Dauble" no="02"/>
                <Workcard img={Work1} name="Dauble Business" no="03"/>
                <Workcard img={Work1} name="PiprTrak GIS" no="04"/>
                <Workcard img={Work1} name="MuscleMatics" no="05"/>
                <Workcard img={Work1} name="PipeTrak IT" no="06"/>
                <Workcard img={Work1} name="Medzin" no="01"/>
              </div>
            </div>
          </Containerfluid>
          <Containerfluid>
            <div className="skills-screen">
              <div className="watermark text-black">skills.</div>
              <div className='skills-list'>
                <div className="what-i-do">
                  <div className="card">
                    <img src={Responsive} alt="Responsive"/>
                    <h3>Responsive Design</h3>
                  </div>
                  <div className="card">
                    <img src={Documented} alt="Documented"/>
                    <h3>Documented Code</h3>
                  </div>
                  <div className="card">
                    <img src={Frameworks} alt="Frameworks"/>
                    <h3>UI Frameworks</h3>
                  </div>
                  <div className="card">
                    <img src={Thirdparty} alt="Thirdparty"/>
                    <h3>API Integration</h3>
                  </div>
                  {/* <div className="card">
                    <img src={Thirdparty} alt="Thirdparty"/>
                    <h3>psd 2 html</h3>
                  </div> */}
                </div>
                <div className="skills">
                  <div className="card">
                    <img src={Html5} alt=""/>
                    <h3>HTML5</h3>
                  </div>
                  <div className="card">
                    <img src={Css3} alt=""/>
                    <h3>CSS3</h3>
                  </div>
                  <div className="card">
                    <img src={Bootstrap} alt=""/>
                    <h3>Bootstrap 4</h3>
                  </div>

                   <div className="card">
                     <img src={Javascript} alt=""/>
                     <h3>Javascript/ES6</h3>
                   </div>
                   <div className="card">
                     <img src={Angular} alt=""/>
                     <h3>Angular JS v1</h3>
                   </div>
                   <div className="card">
                     <img src={Reactjs} alt=""/>
                     <h3>React JS & React Native</h3>
                   </div>

                   <div className="card">
                     <img src={Redux} alt=""/>
                     <h3>Redux</h3>
                   </div>

                   <div className="card">
                     <img src={Nodejs} alt=""/>
                     <h3>Node JS</h3>
                   </div>

                </div>
              </div>
            </div>
          </Containerfluid>
          <Containerfluid>
            <div id="leaflet" className="contact-screen">

            </div>
          </Containerfluid>
        </div>
      </Page>
    );
  }
}

HomePage.PT = {};

export default HomePage;
