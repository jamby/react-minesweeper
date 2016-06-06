var webpack = require('webpack');
module.exports = {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'bootstrap-loader',
      './src/app.js'
    ]
  },
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: './views',
    publicPath: 'http://localhost:8080/bin/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react', 'es2015', 'stage-0'], plugins: ['transform-decorators-legacy'] } },
      { test: /\.jsx$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react', 'es2015', 'stage-0'], plugins: ['transform-decorators-legacy'] } },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000" },
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
    new webpack.ProvidePlugin({ _: "underscore" })
  ]
};
