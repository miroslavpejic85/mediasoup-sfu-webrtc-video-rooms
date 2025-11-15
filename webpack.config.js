const path = require('path')

module.exports = {
  mode: 'production',
  entry: './mediasoup-client-compile.js',
  output: {
    path: require('path').resolve(__dirname),
    filename: 'public/modules/mediasoupclient.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
