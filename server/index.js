// Server configuration
import express from 'express';
import path from 'path';

// Init express
const app = express();

// Port Configuration
const port = 3000 || process.env.PORT;

// Webpack bundler configuration
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

// Configuration file for webpack compiler
const compiler = webpack(webpackConfig);

// webpack middleware configuration
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true,
  host: 'localhost'
}));

// Webpack middleware Configuration
app.use(webpackHotMiddleware(compiler));

// Any route handler
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

// Listen for requests on localhost
app.listen(port, 'localhost', () => {
  console.log(`Running on localhost:${port}`);
});
