const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  assetPrefix: 'https://docs.callmap.app/',
})

module.exports = withNextra()
