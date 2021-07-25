// Use this import if you want to use "env.js" file
// const { API_URL } = require("../../config/env")
// Or just specify it directly like this:
// const API_URL = "http://117.2.155.159:7000/api/v1"
export const API_URL = 'https://truyentranh24h.net/api/v1';

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG = {
  url: API_URL,
  timeout: 60000,
};

export const orderDescEndPoint = '&orderBy=order&sortedBy=desc';
export const orderAscEndPoint = '&orderBy=order&sortedBy=asc';
