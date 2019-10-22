import React from "react"
import { graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "../styles/index.css"

export default ({ data }) => {
  console.log("album: ", data)
  const frontmatter = data.markdownRemark.frontmatter
  return (
    <Layout>
      <Img fluid={frontmatter.images[0].image.childImageSharp.fluid} style={{maxHeight:`100vh`}}/>
      
      <div className="gallery-image portrait-image mt-5 mb-5">
        <Img fluid={frontmatter.images[1].image.childImageSharp.fluid} style={{maxHeight:`100vh`}}/>
      </div>

      <Row className="no-gutters justify-content-center mt-5 mb-5">
        <Container className="justify-content-center">
          <Col xs="12" className="justify-content-center mt-5 mb-5">
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
          </Col>
          <Row className="no-gutters" style={{textAlign:`center`}}>
            <Col xs="12" sm="6" className="mt-md-5">
              <h5>Catalog Downloads</h5>
              <a>Styles, Woods, & Finishes</a><br/>
              <a>EVO-Frameless European Style</a><br/>
              <a>EVO-Frameless European Style</a><br/>
              <a>EVO-Frameless European Style</a><br/>
              <a>EVO-Frameless European Style</a>
            </Col>
            <Col xs="12" sm="6" className="mt-md-5">
              <h5 className="">FREE QUOTES!</h5>
              <p>Contact us today to schedule a free quote!<br/>We come to you!</p>
              <strong>970-420-3409<br/>info@summitkitchens.com</strong>
            </Col>
          </Row>
        </Container>
      </Row>

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
        images {
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
  }
`
