const rp = require('request-promise')
const { matchedData } = require('express-validator')
const { generateToken, ZOOM_API, ZOOM_HEADERS } = require('./helpers')
const { handleError } = require('../../middleware/utils')

const deleteMeeting = async (req, res) => {
  try {
    const token = generateToken()
    req = matchedData(req)
    const options = {
      method: 'DELETE',
      uri: `${ZOOM_API}/meetings/${req.meetingId}`,
      qs: {},
      auth: {
        bearer: token
      },
      headers: ZOOM_HEADERS,
      resolveWithFullResponse: true,
      json: true
    }
    const response = await rp(options)
    res.status(204).json(response)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { deleteMeeting }
