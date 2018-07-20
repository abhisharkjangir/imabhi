import React, { Component } from 'react';

import Work1 from '../../assets/imgs/work1.png';

class Workcard extends Component {
  render(){
    let props = this.props;
    return(
      <div className="workcard">
        <img src={props.img}  alt="" />
        <div className="overlay">
          <h1 className="number">{props.no}</h1>
          <p className="name">
            {props.name}
          </p>
        </div>
      </div>
    )
  }
}

export default Workcard;
