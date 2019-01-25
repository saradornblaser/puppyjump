module.exports = {
  entry: ['babel-polyfill', './client/gameLogic.js'],
  //entry: ['babel-polyfill', './client/index.js'],
  mode: 'development',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.jsx?$/, //regex to find .js files
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};

