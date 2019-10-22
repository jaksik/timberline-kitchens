import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./contact.css"
const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
   <div style={{ width: `80%`, margin: `0 auto`}}>
   <h5 className="page-title">CONTACT US</h5>
   <h4 className="page-title">Tell us about your next project</h4>

   </div>
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

    <Row className="no-gutters">
      <Col xs="12" sm="6" className="contact-text first-contact" style={{borderRight:`1px solid black`}}>
        <h3>Local?</h3>
        <p style={{fontWeight:`bold`}}>Check out our showroom at:</p>
        <p>120 Buffalo Street
          <br/>
          Dillon Colorado 80435
        </p>
      </Col>
      <Col xs="12" sm="6" className="contact-text">
        <h3>Free Quotes!</h3>
        <p style={{fontWeight:`bold`}}>Contact us at:</p>
        <p>970-389-8983<br/>
        info@mtnkitchens.com</p>
      </Col>
    </Row>
  
  </Layout>
)

export default ContactPage
