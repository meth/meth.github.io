module.exports = {
  siteMetadata: {
    title: 'Meth',
    description: 'Cross-platform Etherum wallet and Dapp browser',
    keywords: 'ethereum, dapp, blockchain, wallet, browser, mobile, desktop, ios, android'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-stylus',
      options: {
        use: [
          require('rupture')(),
          require('nib')()
        ],
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
