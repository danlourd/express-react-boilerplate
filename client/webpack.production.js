const { getWebpackConfig } = require('./webpack');

function getProductionConfig() {
  const options = {
    serverPort: '3020',
    siteName: 'Exress React Boilerplate',
    isLocal: false,
    dirname: __dirname,
    mode: 'production',
  }

  return getWebpackConfig(options);
}

module.exports = () => getProductionConfig();
