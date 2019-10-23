import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
const ContactPage = ({ data }) => {
  console.log("data: ", data)
  return (
  <Layout>
    <SEO title="Page two" />
   {/* <div style={{ width: `80%`, margin: `0 auto`}}>
   <h5 className="page-title">CONTACT US</h5>
   <h4 className="page-title">Tell us about your next project</h4>

   </div> */}

    

    <div className="cover-img">
      <div className="overlay">
        <div className="text">
          <h4><strong>120 Buffalo Street <br/>Dillon Colorado 80435</strong></h4>
        </div>
      </div>
      <Img 
        fluid={data.cover.childImageSharp.fluid}
        className="card-img_src center-block"
        imgStyle={{height: `70vh`}}
        style={{height: `70vh`}}
      />
    </div>
    <h4 style={{ width:`100%`, textAlign:`center`}}><strong>FREE QUOTES!</strong><br/>
    Contact us today <br/>to schedule a free quote!<br/>We come to you!<br/><br/>

    </h4>
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
      <input required className="form-input" name="address" placeholder="Address*" type="text" /><br />
      <input required className="form-input" name="city" placeholder="City*" type="text" /><br />
      <input required className="form-input" name="email" placeholder="Email*" type="email" /><br />
      <input className="form-input" name="phone" placeholder="Phone Number" type="number" /><br />
      <textarea className="form-input" name="message" placeholder="Project description, questions, schedule an appointment" type="textarea" /><br />
      <button className="submit-button">Let's Start</button>
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