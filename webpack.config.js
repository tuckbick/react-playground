var path = require('path');

module.exports = {
  entry: './app-client/app.jsx',
  output: {
    path: './public/',
    filename: 'build.js'
  },
  module: {
    test: /.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    loaders: [
      {
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx']
  }
}
