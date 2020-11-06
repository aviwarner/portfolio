import React from "react"
import { GiCarrier } from 'react-icons/gi';

import Layout from "../components/layout"
import ContactBar from "../components/contactBar"
import SEO from "../components/seo"

import './styles.css';

const IndexPage = () => (
  <Layout>

    <SEO title="Home" />
    <h1>Hi! I'm Avi Warner :)</h1>
    <h2>I'm a software engineer</h2>
    <p>
      These days, I'm working at Collective Health building a better healthcare experience
      for Americans.
    </p>
    <p>
      I build and maintain Node.js backends, React & AngularJS frontends, and deal with AWS
      most days.
    </p>
    <p>I live in Alameda, where the nuclear wessels are. <GiCarrier className='inline-icon' /></p>
    <ContactBar />
  </Layout>
)

export default IndexPage
