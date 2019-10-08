import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import Img from "gatsby-image"
import "./nav.css"

function Nav({ siteTitle, siteLogo }) {
  // Declare a new state variable, which we'll call "count"
  const [open, toggle] = useState(false);
    console.log("Open?:", open);
  return (
<Row className="no-gutters">
  <Col xs="10">
  <header
      style={{
        background: `white`,
        marginBottom: `1.45rem`,
        color: `black`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
          <Link
            to="/"
            style={{
              color: `black`,
              textDecoration: `none`,
            }}
          >
           <Row className="no-gutters">
             <Col xs="4">
             <Img fluid={siteLogo}/>
             </Col>
           </Row>
          </Link>
      </div>
    </header>
  </Col>
  <Col xs="2">
    <Row className="no-gutters justify-content-center align-items-center">
      <span onClick={() => toggle(!open)} className="align-middle">&#9776;</span>
    </Row>
  </Col>
  <div id="myNav" className="overlay" style={{height:(open? `100%` : `0%`)}}>
      <a className="closebtn" onClick={() => toggle(!open)}><h4>Close</h4></a>
      <div className="overlay-content">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
        <Link className="nav-link" to="/our-work">Our Work</Link>
        <Link className="nav-link" to="/our-company">Our Company</Link>
        <Link className="nav-link" to="/contact">Contact</Link>

      </div>
    </div>
</Row>
  );
}

export default Nav

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}