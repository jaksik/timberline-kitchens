import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
