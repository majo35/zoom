const { generateToken } = require('./generateToken')

const ZOOM_API = 'https://api.zoom.us/v2'

const ZOOM_HEADERS = {
  'User-Agent': 'Zoom-api-Jwt-Request',
  'content-type': 'application/json'
}

const APIKey = process.env.APIKey
const APISecret = process.env.APISecret

module.exports = {
  generateToken,
  ZOOM_API,
  ZOOM_HEADERS,
  APIKey,
  APISecret
}
