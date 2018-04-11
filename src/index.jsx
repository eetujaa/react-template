/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './assets/stylesheets/style.css'

/****** ADD YOUR CODE AFTER THIS LINE ******/

const Hello = () => (
  <div>
  
    <h1>BIM BOM! Banaani make hehehehehehe!!!</h1>
  
    <h2>Extra spicy</h2>
  
    <div>
      <img src="https://ih1.redbubble.net/image.409410989.4197/flat,750x1000,075,t.u1.jpg" width="320" height="420"></img>
  </div>
  
  <div>
  <iframe width="454" height="280" src="https://www.youtube.com/embed/_0C2rQQiSss" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
  
  </div>
);

class App extends Component {
  render() {
    return (
      <Hello />
    );
  }
}

/****** DO NOT DELETE AFTER THIS LINE ******/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
