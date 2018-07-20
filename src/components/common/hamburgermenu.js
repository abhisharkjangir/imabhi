import React, { Component } from 'react';

class Hamburger extends Component {
  constructor(props){
    super(props)
    this.state = {
      isOpend : false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    let isOpend = this.state.isOpend
    this.setState({isOpend : !isOpend})
  }


  render(){
    return(
      <div className={this.state.isOpend ? 'hamburger hamburger-active' :'hamburger'} onClick={this.toggle}>
        <span className="cls" ></span>
        <span>
          <ul>
            <div className="watermark">menu.</div>
            <li><b>01</b>Home</li>
            <li><b>02</b>About</li>
            <li><b>03</b>Skills</li>
            <li><b>04</b>Experience</li>
            <li><b>05</b>Contact</li>
            <li><b>06</b>Resume</li>
          </ul>
        </span>
        <span className="cls" ></span>
      </div>
    )
  }
}


export default Hamburger;
