// For Development
const FRONTEND_DEV_URLS = [ 'http://localhost:3000' ];

// For Production
const FRONTEND_PROD_URLS = [
  'http://www.himedpay.com',
  'http://himedpay.com'
];

module.exports = process.env.NODE_ENV === 'production'
  ? FRONTEND_PROD_URLS
  : FRONTEND_DEV_URLS;