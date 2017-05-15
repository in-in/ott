module.exports = {
  plugins: [
    require('postcss-easy-import')(),
    require('postcss-nested-ancestors'),
    require('postcss-nested')({
      bubble: ['each']
    }),
    require('postcss-custom-properties').default,
    require('postcss-custom-media')(),
    require('postcss-media-minmax')(),
    require('postcss-each')(),
    require('postcss-assets')({
      'basePath': 'src/'
    }),
    require('postcss-color-function')(),
    require('postcss-pseudoelements')(),
    require('autoprefixer')({
      'browsers': 'last 10 versions'
    }),
    require('css-mqpacker')({
      sort: true
    }),
    require('postcss-csso')()
  ]
}
