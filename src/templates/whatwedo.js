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
          <Col xs="12" sm="8">
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
          </Col>
          
          <Col xs="12" style={{textAlign:`center`}}>
            <h5>Catalog Downloads</h5>
              <a>Styles, Woods, & Finishes</a><br/>
              <a>EVO-Frameless European Style</a>
            <h5 className="mt-5">FREE QUOTES!</h5>
            <p>Contact us today to schedule a free quote! We come to you!</p>
            <strong>
              
              970-420-3409<br/>
            
              info@summitkitchens.com

            </strong>
        
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
