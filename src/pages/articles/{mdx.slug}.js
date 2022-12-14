
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const ArticlePage = ({data}) => {


  return (

    
    <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>{data.mdx.frontmatter.date}</p>
    <MDXRenderer>
        {data.mdx.body}
        
    </MDXRenderer>
    <p><Link to="../">Back to Article Page</Link></p>
    </Layout>


  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`


export default ArticlePage
