import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Work will go here</h1>
    <p>Like portfolio stuff</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Work
