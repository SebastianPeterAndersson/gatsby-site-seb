

import * as React from "react"

import Layout from "../components/layout"

import {Link} from "gatsby"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to my homepage. It's really nice seeing you!</p>
      <p>Click <Link to="/about">here</Link> to learn more about me, you handsome
      son of a gun!</p>
    </Layout>
  )
}

export default IndexPage
