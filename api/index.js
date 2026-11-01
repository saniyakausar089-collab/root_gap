/**
 * Vercel Serverless Function entrypoint for ROOT_GAP API
 * Routes all /api/* calls to the native backend handler
 */
const handleRequest = require('../server');

module.exports = (req, res) => {
  return handleRequest(req, res);
};
