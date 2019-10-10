import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "./style.css"

export default ({ data }) => {
  console.log("album: ", data)
  return (
    <Layout>
      <div className="album-wrapper"> 
        {data.markdownRemark.frontmatter.images.map(image => {
            console.log(image);
            const imgFluid = image.image.childImageSharp.fluid;
          return (
            <div className={`gallery-image` + (imgFluid.aspectRatio > .9 ? `` : ` portrait-image`)}>
              <Img fluid={imgFluid} imgStyle={{}} style={{}} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
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
