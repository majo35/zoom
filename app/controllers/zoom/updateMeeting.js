const rp = require('request-promise')
const { matchedData } = require('express-validator')
const { generateToken, ZOOM_API, ZOOM_HEADERS } = require('./helpers')
const { handleError } = require('../../middleware/utils')

const updateMeeting = async (req, res) => {
  try {
    const meeting = req.body
    const token = generateToken()
    req = matchedData(req)
    const payload = { ...meeting }
    const options = {
      method: 'PATCH',
      uri: `${ZOOM_API}/meetings/${req.meetingId}`,
      qs: {},
      body: payload,
      auth: {
        bearer: token
      },
      headers: ZOOM_HEADERS,
      json: true
    }
    const response = await rp(options)
    res.status(204).json(response)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { updateMeeting }
