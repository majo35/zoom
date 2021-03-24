const jwt = require('jsonwebtoken')

const APIKey = process.env.APIKey
const APISecret = process.env.APISecret
const payload = {
  iss: APIKey,
  exp: new Date().getTime() + 5000
}
const generateToken = () => {
  return jwt.sign(payload, APISecret)
}

module.exports = { generateToken }
