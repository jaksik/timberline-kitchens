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
        <Img fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid} style={{maxHeight:`300px`}}/>
        <Row className="no-gutters">
          <div className="line-divider"></div>
          <h4 style={{fontWeight:`bold`}}>Company</h4>
          <p>Mtn Kitchens is an authorized Showplace Wood Products dealer. Partnering with Showplace allows us to offer our customers many different species of wood along with an endless variety of style and color options. Learn more about Showplace
              Mtn Kitchens has been installing and refacing kitchen and bath cabinetry in Summit County for over Six Years. We take pride in our work and bringing you the kitchen or bath you dreamed of. We are cabinet refacing specialists and offer Full New Kitchen Cabinetry - ready to take on jobs of all sizes.
            Our team of installers are some of the best the county has to offer and will ensure the job is done right.  Expert installers and cabinet refacing specialists work directly with our project managers to deliver you the highest level of satisfaction possible. 
              Services Offered: kitchen design, new cabinetry & installation, cabinet reface/rebuild, wood countertop installation, wood veneering, corrugated island panel wrapping, LED cabinet lighting installation, Countertops, Drywall, Backsplash and Details to make it perfect. 
          </p>
        </Row>
        <Row className="no-gutters">
          <div className="line-divider"></div>
          <h4 style={{fontWeight:`bold`}}>Company</h4>
          <p>Mtn Kitchens is an authorized Showplace Wood Products dealer. Partnering with Showplace allows us to offer our customers many different species of wood along with an endless variety of style and color options. Learn more about Showplace
              Mtn Kitchens has been installing and refacing kitchen and bath cabinetry in Summit County for over Six Years. We take pride in our work and bringing you the kitchen or bath you dreamed of. We are cabinet refacing specialists and offer Full New Kitchen Cabinetry - ready to take on jobs of all sizes.
            Our team of installers are some of the best the county has to offer and will ensure the job is done right.  Expert installers and cabinet refacing specialists work directly with our project managers to deliver you the highest level of satisfaction possible. 
              Services Offered: kitchen design, new cabinetry & installation, cabinet reface/rebuild, wood countertop installation, wood veneering, corrugated island panel wrapping, LED cabinet lighting installation, Countertops, Drywall, Backsplash and Details to make it perfect. 
          </p>
          <div className="line-divider"></div>

        </Row>
        <Img fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid} style={{maxHeight:`300px`}}/>

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
