require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Diverse Visual - Visual Effects Advertising`,
    description: `We deliver the most impactful sales messages through Personalized-Visual™ communication. We partner with select clients and provide a results-based service model.`,
    author: `@itsDiverse`,
    siteUrl: `https://meetdiverse.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-html-attributes`,
      options: {
        lang: `en`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: "./static/favicon.png",
    //   },
    // },

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 50,
      },
    },
    `gatsby-plugin-svgr`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -50,
        duration: 400,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `diverse`,
        short_name: `diverse`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `static/favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/freeProposal/`, `/coomingSoon/`, `/404/`],
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /.*\.mp4/,
              handler: `NetworkOnly`,
            },
          ],
        },
      },
    },
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-css-modules`,
    {
      resolve: "gatsby-plugin-modal-routing",
      options: {
        modalProps: {
          style: {
            overlay: {
              zIndex: 1001,
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5QQH65M",
        includeInDevelopment: false,
      },
    },
  ],
}
