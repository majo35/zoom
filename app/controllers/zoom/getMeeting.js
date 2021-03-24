const rp = require('request-promise')
const { matchedData } = require('express-validator')
const { generateToken, ZOOM_API, ZOOM_HEADERS } = require('./helpers')
const { handleError } = require('../../middleware/utils')

const getMeeting = async (req, res) => {
  try {
    const token = generateToken()
    req = matchedData(req)
    const options = {
      uri: `${ZOOM_API}/meetings/${req.meetingId}`,
      qs: {},
      auth: {
        bearer: token
      },
      headers: ZOOM_HEADERS,
      json: true
    }
    const response = await rp(options)
    res.status(200).json(response)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getMeeting }
