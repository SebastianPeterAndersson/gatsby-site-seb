import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'

const ArticlePage = ({data}) => {


  return (

    <Layout pageTitle="Articles">
    {
       data.allMdx.nodes.map((node) => (
         <article key={node.id}>
           <h2>
              <Link to={`/articles/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
           <p>Posted: {node.frontmatter.date}</p>
         </article>
       ))
     }
    </Layout>
  )

}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`




export default ArticlePage
