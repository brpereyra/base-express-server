const dotenv = require('dotenv');
dotenv.config();
function isDev() {
  return process.env.NODE_ENV !== 'production';
}

module.exports = {
  dev: isDev(),
  prod: !isDev(),
  mode_name: isDev() ? 'development' : 'production',
  port: process.env.PORT || 3000
};
