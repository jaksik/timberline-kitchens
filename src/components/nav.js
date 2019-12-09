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
      <Row className="no-gutters align-items-center justify-content-between h-100" style={{ minHeight: `75px` }}>

        <Col xs="3">
          <AniLink fade to="/">
            {/* <Img fluid={siteLogo} className="m-2 m-sm-3 m-lg-4" /> */}
            <h2>FOCO Cabinets</h2>
          </AniLink>
        </Col>

        <Col xs="2" className="d-lg-none">
          <span onClick={() => toggle(!open)} className="nav-icon">
            <div className={(open ? `change` : ``)} onclick={() => toggle(!open)}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </span>
        </Col>

        <Col lg="5" className={(open ? `mobile-open` : `mobile-closed`)}>
          <Row className="no-gutters nav-item-wrapper align-items-center pb-5 pb-lg-0">

            <Col xs="12">
              <div className="nav-item-container justify-content-end">
                <AniLink className="nav-item" fade to="/cabinetry"><p>Cabinetry</p></AniLink>

                <AniLink className="nav-item" fade to="/refacing"><p>Refacing</p></AniLink>

                <AniLink className="nav-item" fade to="/our-work"><p>Our Work</p></AniLink>

                <AniLink className="nav-item" fade to="/contact"><p>Contact</p></AniLink>
              </div>
            </Col>
          </Row>
        </Col>
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