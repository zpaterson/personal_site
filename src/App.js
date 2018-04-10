import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import HeroImage from './HeroImage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div>
              <Header />
            </div>
            <div>
             <HeroImage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
