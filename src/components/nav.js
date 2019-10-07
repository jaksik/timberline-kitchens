import React, { useState } from 'react';
import "./nav.css"

function Nav() {
  // Declare a new state variable, which we'll call "count"
  const [open, toggle] = useState(false);
    console.log("Open?:", open);
  return (
<>
<div id="myNav" className="overlay" style={{height:(open? `100%` : `0%`)}}>
    <a className="closebtn" onClick={() => toggle(!open)}><h4>Hello</h4></a>
    <div className="overlay-content">
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  </div>
  <span onClick={() => toggle(!open)}>&#9776; open</span>
</>
  );
}

export default Nav