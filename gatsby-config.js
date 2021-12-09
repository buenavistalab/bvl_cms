module.exports = {
  siteMetadata: {
    title: `WOGO FILMES`,
    description: `Description example.`,
    siteUrl: `https://wogofilmes.com.br`,
    home: {
      title: `WOGO FILMES`,
      description: `Aqui as ideias que se transformam em vídeos capazes de conectar pessoas. Do roteiro, à produção e à finalização completa de cada projeto..`,
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WOGO FILMES`,
        short_name: `WOGO FILMES`,
        start_url: `/`,
        background_color: `#0d518c`,
        theme_color: `#0d518c`,
        display: `minimal-ui`,
        icon: `static/assets/logos/logo.jpg`,
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-xxx",
        head: true,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-dark-mode`
  ],
}
