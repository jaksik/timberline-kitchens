import React from "react"
import { Link, graphql} from "gatsby"
import { Button } from "reactstrap"
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
    <div className="video-overlay">
      <div className="overlay-content">
        <h1 style={{fontWeight:`bold`, fontSize:`3.5rem`}}>She Got New Cabinets</h1>
        <h1><strong>You Can Too</strong></h1>
        <button className="landing-button mr-3">Our Work</button> <button className="landing-button">Contact Us</button>
      </div>
    </div>
    <video poster autoPlay loop>
        <source src="https://web-dev-videos.s3-us-west-2.amazonaws.com/1016172571-preview.mp4" type="video/mp4"/>
      </video>
  </Layout>
)}

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
}
`
