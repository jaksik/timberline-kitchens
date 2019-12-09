import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col, Button } from "reactstrap"
import Img from "gatsby-image"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css"

const IndexPage = ({ data }) => {
  console.log("data", data);

  return (
    <Layout>
      <SEO title="Home" />
      {/* <div className="video-overlay">
      <div className="overlay-content">
        <h1 style={{fontWeight:`bold`, fontSize:`3.5rem`}}>She Got New Cabinets</h1>
        <h1><strong>You Can Too</strong></h1>
        <button className="landing-button mr-3">Our Work</button> <button className="landing-button">Contact Us</button>
      </div>
    </div> */}

      <div className="landing-container">
        <div className="landing-overlay">
          <Row className="no-gutters align-items-center h-100">
            <Col xs="12">
              <h1 className="m-0 text-center">Colorado's Premier Cabinets</h1>
              <div className="w-100 align-items-center">
               <Row className="justify-content-center mt-4 pb-5 mb-5">
               <AniLink fade to="/our-work/"><Button color="success">Our Work</Button></AniLink> <AniLink fade to="/contact/"><Button className="ml-4" color="info">Contact Us</Button></AniLink>
               </Row>
              </div>
            </Col>
          </Row>

        </div>
        <Img fluid={data.landingImage.childImageSharp.fluid} className="mobile-cover h-100" />
        <Img fluid={data.wideLanding.childImageSharp.fluid} className="desktop-cover" />
      </div>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMarkdownRemark (filter: { frontmatter: {templateKey: {regex: "/album/"}}}) {
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 40) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  landingImage: file(relativePath: { eq: "landing.jpg" }) {
    childImageSharp {
      fluid(quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  wideLanding: file(relativePath: { eq: "wide-landing.jpg" }) {
    childImageSharp {
      fluid(quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
