import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"

const ContactPage = ({ data }) => {
  console.log("data: ", data)
  return (
  <Layout>
    <SEO title="Page two" />
   
    <div className="cover-img">
      <div className="static-overlay">
        <div className="text">
          <h4><strong>STOP BY OUR SHOW ROOM</strong></h4>
          <br/>
          <h4>
            <strong>120 BUFFALO STREET <br/>DILLON, COLORADO 80435</strong>
            </h4>
        </div>
      </div>
      <Img 
        fluid={data.cover.childImageSharp.fluid}
        className="card-img_src center-block"
        imgStyle={{height: `70vh`}}
        style={{height: `70vh`}}
      />
    </div>

    <Row className="no-gutters justify-content-center">
    <Container style={{margin:`0 auto`}}>
    <h4 className="font-weight-bold">Call For An Appointment</h4>
    <h4>970-389-8983</h4>

    <h4 className="font-weight-bold">General Inquiries</h4>
    <h4>info@mtnkitchens.com</h4>

    </Container>
    </Row>
    {/* <h4 style={{ width:`100%`, textAlign:`center`}}><strong>Contact Us Today</strong></h4>
    <h4 style={{ width:`100%`, textAlign:`center`}}>
      Schedule A Free Quote!<br/>Tell Us About Your Project<br/>Ask Any Question!<br/>
    </h4> */}

    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{ width: `80%`, margin: `0 auto`}}
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input style={{display: `none`}} type="text" /><br />
      <input required className="form-input" name="name" placeholder="First and Last Name*" type="text" /><br />
      <input required className="form-input" name="email" placeholder="Email*" type="email" /><br />
      <input className="form-input" name="phone" placeholder="Phone Number" type="number" /><br />
      <input required className="form-input" name="city" placeholder="Town / City" type="text" /><br />
      <textarea className="form-input" name="message" placeholder="Schedule an appointment, tell us about your project, or ask any question!" type="textarea" /><br />
      <button className="submit-button">Let's Get Started</button>
    </form>
  
  </Layout>
)}

export default ContactPage

export const query = graphql`
    query {
      cover: file(relativePath: { eq: "cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`