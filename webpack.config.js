import path from 'path'
import webpack from 'webpack'

const webpackConfig = (env) => {
  return {
    devtool: 'eval',
    entry: {
      // 'webpack-dev-server/client?http://localhost:3000',
      // 'webpack/hot/only-dev-server',
      app: path.resolve(__dirname, './src/app.js'),
      vendor: ['react']
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'js/[name].js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        config: path.join(__dirname, 'env', env)
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __DEVELOPMENT__: true,
        __DEVTOOLS__: true
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['react-hot', 'babel'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.css/,
          loaders: ['style', 'css', 'cssnext']
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader?limit=32768'
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&minetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
      ]
    }
  }
}
export default webpackConfig
