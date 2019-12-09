import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "./style.css"



const PortfolioPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />

      {data.allMarkdownRemark.edges.map((project, index) => {
        return (
          <AniLink fade to={project.node.fields.slug}>
            <div class="cover-img" style={{ marginTop: (index > 0 ? `40px` : `0px`) }}>
              <div class="overlay">
                <Row className="no-gutters align-items-center h-100 text">
                  <Col xs="12">
                    <h3 className="font-weight-bold ml-3">{project.node.frontmatter.title}</h3>
                  </Col>
                </Row>
              </div>
              <Img
                title={project.node.frontmatter.title}
                alt="Screenshot of Project"
                fluid={project.node.frontmatter.image.childImageSharp.fluid}
                className="card-img_src center-block"
                imgStyle={{ height: `70vh` }}
                style={{ height: `70vh` }}
                durationFadeIn={1000}
              />
            </div>
          </AniLink>
        )
      })}
    </Layout>
  )
}

export default PortfolioPage

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