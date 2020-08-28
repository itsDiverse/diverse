require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Diverse`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@itsDiverse`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp` /*
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/,
    "gatsby-plugin-eslint",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-css-modules`,
    {
      resolve: "gatsby-plugin-modal-routing",
      options: {
        modalProps: {
          style: {
            overlay: {
              zIndex: 1001,
              backdropFilter: "blur(8px)",
              webkitBackdropFilter: "blur(8px)",
            },

            content: {
              margin: 0,
              padding: 0,
              left: "50%",
              top: "50%",
              bottom: "auto",
              right: "auto",
              transform: "translateX(-50%) translateY(-52%)",
              borderRadius: "25px",
            },
          },
          shouldCloseOnOverlayClick: true,
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
