var webpack = require('webpack');
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: [
      'webpack/hot/dev-server',
      'bootstrap-loader',
      'font-awesome-loader',
      'react',
      'react-dom',
      'jquery',
      'underscore'
    ]
  },
  output: {
    path: './bin',
    publicPath: '/',
    filename: 'app.bundle.js'
  },
  devServer: {
    contentBase: './views',
    publicPath: '/'
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
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery" }),
    new webpack.ProvidePlugin({ _: "underscore" })
  ]
};
