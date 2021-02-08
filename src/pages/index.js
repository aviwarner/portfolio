import React from "react"
import { GiCarrier } from 'react-icons/gi';

import Layout from "../components/layout"
import ContactBar from "../components/contactBar"
import SEO from "../components/seo"

import './styles.css';

const IndexPage = () => {
  console.log('%cHi friend, watcha looking for?', 'font-weight: bold;font-size: 50px;color: red;text-shadow:3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8), 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

  return (
    <Layout>

      <SEO title="Home" />
      <h1>Hi! I'm Avi Warner :)</h1>
      <h2>I'm a software engineer</h2>
      <p>
        These days, I work at <a href="http://mural.co/">Mural</a> as a full stack engineer.
      </p>
      <p>
        I build and maintain Node.js backends, React & AngularJS frontends, and deal with a
        variety of AWS services pretty often.
      </p>
      <p>I live in Alameda, where the nuclear wessels are. <GiCarrier className='inline-icon' /></p>
      <ContactBar />
    </Layout>
  )
}

export default IndexPage
