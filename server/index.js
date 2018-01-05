// Server configuration
import express from 'express';
import path from 'path';

const app = express();

// Webpack bundler configuration
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

// webpack middleware configuration
app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));  
});

app.listen(3000, () => {
  console.log('Server listening on localhost:3000');
});