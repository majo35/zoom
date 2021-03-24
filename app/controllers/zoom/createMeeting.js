const rp = require('request-promise')
const { matchedData } = require('express-validator')
const { generateToken, ZOOM_API, ZOOM_HEADERS } = require('./helpers')
const { handleError } = require('../../middleware/utils')

const createMeeting = async (req, res) => {
  try {
    const meeting = req.body.meeting
    const token = generateToken()
    req = matchedData(req)
    const payload = { userId: req.userId, ...meeting }
    const options = {
      method: 'POST',
      uri: `${ZOOM_API}/users/${req.userId}/meetings`,
      qs: {},
      body: payload,
      auth: {
        bearer: token
      },
      headers: ZOOM_HEADERS,
      json: true
    }
    const response = await rp(options)
    res.status(201).json(response)
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createMeeting }
