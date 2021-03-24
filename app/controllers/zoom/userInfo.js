const { handleError } = require('../../middleware/utils')
const rp = require('request-promise')
const { matchedData } = require('express-validator')
const { generateToken, ZOOM_API, ZOOM_HEADERS } = require('./helpers')

const userInfo = async (req, res) => {
  try {
    const token = generateToken()
    req = matchedData(req)
    const userId = req.userId
    const options = {
      uri: `${ZOOM_API}/users/${userId}`,
      qs: {},
      auth: {
        bearer: token
      },
      headers: ZOOM_HEADERS,
      json: true
    }
    const data = await rp(options)
    res.status(200).json(data)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { userInfo }
