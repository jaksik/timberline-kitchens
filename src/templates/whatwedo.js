import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "../styles/index.css"

export default ({ data }) => {
  console.log("album: ", data)
  const frontmatter = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className="cover-image">
        <Img 
          fluid={frontmatter.images[0].image.childImageSharp.fluid} 
          style={{height:`70vh`}}/>
      </div>
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
              <h4 className="font-weight-bold">Catalog Downloads</h4>
              <Link><h4>Styles, Woods, & Finishes</h4></Link>
              <Link><h4>EVO-Frameless European Style</h4></Link>
              <Link><h4>EVO-Gallery</h4></Link>
              <Link><h4>Gallery of Kitchens</h4></Link>
              <Link><h4>Cabinetry for the Bath</h4></Link>
            </Col>
            <Col xs="12" sm="6" className="mt-md-5">
              <h4>
                <strong>FREE QUOTES!</strong>
                <br/>
                Contact us today <br/>to schedule a free quote!<br/>We come to you!<br/><br/>
                970-420-3409<br/>info@summitkitchens.com
              </h4>
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
