/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `nihongoscotland`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets/`
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg', 'woff', 'woff2']
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // data: `@import "${__dirname}/styles/main";`,
        includePaths: [`${__dirname}/styles/main`]
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://nihongoscotland.us16.list-manage.com/subscribe/post?u=17e930ef2f11232d3ac0dca1e&amp;id=200df291c9',
      },
    },
  ],
}

