module.exports = {
  siteMetadata: {
    title: 'Meth',
    description: 'Cross-platform Etherum wallet and Dapp browser',
    keywords: 'ethereum, dapp, blockchain, wallet, browser, mobile, desktop, ios, android'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-stylus",
      options: {
        use: [
          require('rupture')(),
          require('nib')()
        ],
      },
    },
    'gatsby-plugin-postcss',
  ],
}
