import React from "react"
import { graphql } from "gatsby"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image"
import "./style.css"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({ data }) => {
//   const { edges: coverImgData } = data.CoverImgs;
    console.log("data: ", data);
  return (
  <Layout>
    <SEO title="Home" />

      {/** Map through cover images */}
      {data.allMarkdownRemark.edges.map(project => {

        // const image = data.coverImages.find(n => {
        //     return n.node.relativePath === project.node.frontMatter.coverImage;
        // });
        console.log("data: ", data)

        // const imageFluid = image.node.childImageSharp.sizes;

        return (
          <AniLink fade to={project.node.fields.slug}>
            <div class="cover-img">
              <div class="overlay">
                <div class="text">
                  <h3 className="font-weight-bold">{project.node.frontmatter.title}</h3>
                </div>
              </div>
              <Img
                  title={project.node.frontmatter.title}
                  alt="Screenshot of Project"
                  fluid={project.node.frontmatter.image.childImageSharp.fluid}
                  className="card-img_src center-block"
                  imgStyle={{height: `70vh`}}
                  style={{height: `70vh`}}
                  durationFadeIn={1000}
              />
            </div>
          </AniLink>
        )
        })}

  </Layout>
)}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: {regex: "\/our-work/"}}) {
        edges {
          node {
            fields {
                slug
            }
            frontmatter {
                title
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
  }
`