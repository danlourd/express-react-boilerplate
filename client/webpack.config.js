const { getWebpackConfig } = require('./webpack');

function getLocalConfig() {
  const options = {
    port: '3010',
    siteName: 'Exress React Boilerplate',
    dirname: __dirname,
    mode: 'development',
  }

  return getWebpackConfig(options);
}

module.exports = () => getLocalConfig();
