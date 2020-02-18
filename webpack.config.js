const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/app.js',
  externals: {
    'aws-sdk': 'aws-sdk'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          configFile: './babel.config.js'
        }
      }
    ]
  }
};
