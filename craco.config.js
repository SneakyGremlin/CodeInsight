// https://github.com/facebook/create-react-app/discussions/11278#discussioncomment-1290846 
// adapted from above, and then pored through documentation for some.

const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        // fs: require.resolve('fs'),
        fs: false, // KEEP AS DEFAULT.
        util: require.resolve("util/"),
        stream: require.resolve('stream-browserify'),
        vm: require.resolve('vm-browserify'),
        buffer: require.resolve('buffer/'),
        crypto: require.resolve('crypto-browserify'),
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        process: require.resolve('process/browser'),
      };

      webpackConfig.resolve.alias = {
        'process/browser': require.resolve('process/browser'),
      };

      webpackConfig.resolve.extensions = ['.js', '.mjs', '.json'];

      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      );

      return webpackConfig;
    },
  },
};

