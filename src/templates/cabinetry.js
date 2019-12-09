import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "../styles/index.css"
import "./style.css"

export default ({ data }) => {
  console.log("album: ", data)
  const frontmatter = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className="page-cover">
        <div className="page-overlay">
          <Row className="no-gutters align-items-center h-100">
            <Col xs="12">
              <h1 className="text-center">{frontmatter.title}</h1>
            </Col>
          </Row>
        </div>
        <Img fluid={frontmatter.images[0].image.childImageSharp.fluid} style={{ height: `70vh` }} />
      </div>

      <Row className="no-gutters mt-5 mb-5">
        <div className="content-container">

          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

          {/* <div className="gallery-image portrait-image mt-5 mb-5">
            <Img fluid={frontmatter.images[1].image.childImageSharp.fluid} style={{ maxHeight: `100vh` }} />
          </div> */}
          {/* <Row className="no-gutters" style={{ textAlign: `center` }}>
            <Col xs="12" sm="6" className="mt-md-5">
              <h4 className="font-weight-bold">Catalog Downloads</h4>
              <Link><h5>Styles, Woods, & Finishes</h5></Link>
              <Link><h5>EVO-Frameless European Style</h5></Link>
              <Link><h5>EVO-Gallery</h5></Link>
              <Link><h5>Gallery of Kitchens</h5></Link>
              <Link><h5>Cabinetry for the Bath</h5></Link>
            </Col>
            <Col xs="12" sm="6" className="mt-md-5">
              <h4><strong>FREE QUOTES!</strong></h4>
              <h5>
                Contact us today <br />to schedule a free quote!<br />We come to you!<br /><br />
                970-420-3409<br />info@summitkitchens.com
              </h5>
            </Col>
          </Row> */}
        </div>
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
