const crypto = require('crypto')
const { matchedData } = require('express-validator')
const { APIKey, APISecret } = require('./helpers/index')
const { handleError } = require('../../middleware/utils')

const getWebSignature = async (req, res) => {
  try {
    req = matchedData(req)
    const meetingNumber = req.meetingNumber
    const role = req.role

    const timestamp = new Date().getTime() - 30000
    const msg = Buffer.from(APIKey + meetingNumber + timestamp + role).toString(
      'base64'
    )

    const hash = crypto
      .createHmac('sha256', APISecret)
      .update(msg)
      .digest('base64')
    const signature = Buffer.from(
      `${APIKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
    ).toString('base64')
    res.status(200).json({
      signature,
      apiKey: APIKey
    })
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { getWebSignature }
