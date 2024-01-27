const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const path = require('path')

module.exports = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withNextra()