module.exports = {
  siteMetadata: {
    title: 'Meth',
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
