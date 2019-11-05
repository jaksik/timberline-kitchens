import React, { useState } from 'react';
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image"
import "./nav.css"

function Nav({ siteTitle, siteLogo }) {
  const [open, toggle] = useState(false);
  return (
    <header>
      <Row className="no-gutters align-items-center align-middle">
        <Col xs="10">
            <Row className="no-gutters">
              <Col xs="6" sm="5" md="4" lg="3" className="offset-lg-1">
                <AniLink fade to="/">
                  <Img fluid={siteLogo} className="m-2 m-sm-3 m-lg-4"/>
                </AniLink>
              </Col>
            </Row>
        </Col>
        <Col xs="2" className="no-gutters justify-content-center align-items-center">
          <Row className="no-gutters justify-content-center align-items-center">
            <span onClick={() => toggle(!open)} className="align-middle nav-icon">
            <div className={`container nav-icon ` + (open ? `change` : ``)} onclick={() => toggle(!open)}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
            </span>
          </Row>
        </Col>
        <div id="myNav" className="nav-overlay" style={{height:(open? `100%` : `0%`)}}>
          <a className="closebtn" onClick={() => toggle(!open)}><h4>Close</h4></a>
          <div className="nav-content">
            <AniLink className="nav-item" fade to="/new-cabinetry">
              <p>New Cabinetry</p>
            </AniLink>
            <AniLink className="nav-item" fade to="/cabinet-refacing">
              <p>Cabinet Refacing</p>
            </AniLink>
            <AniLink className="nav-item" fade to="/our-work">
              <p>Our Work</p>
            </AniLink>
            <AniLink className="nav-item" fade to="/contact">
              <p>Contact</p>
            </AniLink>
          </div>
        </div>
      </Row>
    </header>
  );
}

export default Nav

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}