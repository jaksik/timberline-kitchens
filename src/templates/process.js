import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "../styles/index.css"

export default ({ data }) => {
  console.log("album: ", data)
  return (
    <Layout>
      <div className="page-container"> 
        <Row className="no-gutters">
          <Col xs="12" md="4">
            <h3></h3>
          </Col>
        </Row>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
