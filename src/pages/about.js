

import * as React from 'react'

import Layout from "../components/layout"

import {StaticImage} from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hello, you. This is Sebastian speaking.
      How very nice of you to stop by.</p>
      <StaticImage
      alt="A nice Seb standing there"
      src="../images/seb.png">
      </StaticImage>
    </Layout>
  )
}

export default AboutPage
