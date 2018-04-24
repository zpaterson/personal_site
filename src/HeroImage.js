import React, { Component } from 'react';
import './App.css';
import jumboImage from "./images/about.jpg";
import Button from './Button';


class HeroImage extends Component {
  render() {
    const jumboTitle = "Hi, I'm Zaire";
    const jumboAbout="I'm a Full Stack Web Developer living in San Francisco.";

    return (
      <div className="jumbotron App-jumbotron">
        <div className="col-md-6 col-xs-6">
          <h1>{jumboTitle}</h1>
          <h2 className="App-jumbo-header">{jumboAbout}</h2>
        </div>
        <div className="col-md-6 col-xs-6">
          <img className="App-HeroImage" src={jumboImage} alt="picture of me" />
        </div>
        <div className="col-md-6 col-xs-6">
          <Button />
        </div>
      </div>
    );
  }
}

export default HeroImage;
