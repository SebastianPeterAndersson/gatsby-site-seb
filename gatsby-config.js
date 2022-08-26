module.exports = {
  siteMetadata: {
    title: `Astian`,
    siteUrl: `https://astian.se`,
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
        options: {
        name: `articles`,
        path: `${__dirname}/articles`,
       }
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4w7noc229lbu`,
        accessToken: `F48116NFIO49jMtP9lrQmuTzWpGcE1ZNYNUc4nKYbB4`,
        host: `preview.contentful.com`,
      },
    }
  ],
}
