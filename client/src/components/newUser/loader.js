import React, { Component } from 'react';

import "./loader.css"

export default class Loader extends Component {

  timer;

  start() {
    this.timer = setTimeout(this.showPage, 3000);
  }

  showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("complete").style.display = "block";
  }
  
  render() {
    return (
      <div>
        <div style={{ display:'none' }} id="loader"></div>
        <div style={{ display:'none' }} id="complete" className="animate-bottom">
          <h2>Tada!</h2>
          <p>Some text in my newly loaded page..</p>
        </div>
      </div>
    )
  } 
}