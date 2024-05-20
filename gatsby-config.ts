import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/portfolio",
  siteMetadata: {
    title: `My Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chris's Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // The path to your icon file
        icons: [
          {
            src: `${__dirname}/src/images/favicon.png`,
            sizes: `64x64 32x32 24x24 16x16`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `${__dirname}/src/images/512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};

export default config;
