const rp = require('request-promise')
const { generateToken, ZOOM_API, ZOOM_HEADERS } = require('./helpers')
const { handleError } = require('../../middleware/utils')
// const { matchedData } = require('express-validator')

const createUser = async (req, res) => {
  try {
    const userConfig = req.body
    console.log(userConfig)
    const token = generateToken()
    const payload = userConfig
    const options = {
      method: 'POST',
      uri: `${ZOOM_API}/users`,
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

const listUsers = async (req, res) => {
  try {
    const token = generateToken()
    const options = {
      method: 'GET',
      uri: `${ZOOM_API}/users`,
      qs: {
        status: 'active',
        /* eslint-disable-next-line camelcase  */
        role_id: 2
      },
      // body: payload,
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

const deleteUser = async (req, res) => {
  try {
    const token = generateToken()
    const userId = req.params.userId
    // req = matchedData(req)
    const options = {
      method: 'DELETE',
      uri: `${ZOOM_API}/users/${userId}`,
      qs: {
        action: 'delete'
      },
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

const updateUserSettings = async (req, res) => {
  try {
    const settings = req.body
    const token = generateToken()
    // req = matchedData(req)
    const userId = req.params.userId
    const payload = { ...settings }
    const options = {
      method: 'PATCH',
      uri: `${ZOOM_API}/users/${userId}/settings`,
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

module.exports = { createUser, listUsers, deleteUser, updateUserSettings }
