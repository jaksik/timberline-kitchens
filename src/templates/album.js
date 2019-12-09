import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "./style.css"

export default ({ data }) => {
  const images = data.markdownRemark.frontmatter.images

  return (
    <Layout>
      <div className="album-wrapper">
        {images.map((image, index) => {
          const imgFluid = image.image.childImageSharp.fluid;
          return (
            <div className={`gallery-image` + (imgFluid.aspectRatio > .9 ? `` : ` portrait-image`)} style={{ marginTop: (index > 0 ? `40px` : `0px`) }}>
              <Img fluid={imgFluid} />
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
