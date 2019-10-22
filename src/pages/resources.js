import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tabs from "../components/tabs"
import "../styles/index.css"

const ResourcePage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="page-container">
    <Tabs/>
    </div>
  </Layout>
)

export default ResourcePage
