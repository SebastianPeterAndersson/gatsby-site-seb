import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const ArticlePage = ({data}) => {

const article = data.allFile.nodes


  return (



    <Layout pageTitle="Articles">
    {
        article.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      <p>My cool posts will go in here</p>
    </Layout>
  )

}

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "articles"}}) {
    nodes {
      name
    }
  }
}
`

export default ArticlePage
