import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./style.css"

const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
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

      <select className="form-input" required name="prefered-lake">
        <option disabled>Prefered lake for lesson</option>
        <option value="Lake-Austin">Lake Austin</option>
        <option value="Lake-Travis">Lake Travis</option>
        <option value="Lake-LBJ">Lake LBJ</option>
        <option value="Canyon-Lake">Canyon Lake</option>
      </select><br />

      <select className="form-input" required name="boat">
        <option disabled>Boat for lesson</option>
        <option value="Private-Owner">Private Owner</option>
        <option value="Boat-Club">Boat Club</option>
        <option value="Boar-Rental">Boat Rental</option>
      </select><br />
     
      <select className="form-input" required name="experience-level">
        <option disabled>Your experience level</option>
        <option value="Never stood up">Have never successfully stood up</option>
        <option value="Can stand up, little maneuvering">Can stand up, little or basic maneuvering</option>
        <option value="Ready for advanced">Comfortable manurvering, ready for advanced practice</option>
      </select>

      <input type="date"
        placeholder="Preffered day:"
        className="form-input"
        name="meeting-time"
        min="2019-01-03T00:00"
        max="2020-31-31T00:00"/>
      <br />
      <br/>

      <textarea className="form-input" name="message" placeholder="  Anything else we should know before your lesson?" type="textarea" /><br />

      <button className="submit-button">Send It!</button>

    </form>
  </Layout>
)

export default ContactPage
