const withCSS = require('@zeit/next-css')

const config = withCSS({
  target: 'serverless'
})

module.exports = config
