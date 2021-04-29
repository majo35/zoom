const express = require('express')
const router = express.Router()
const trimRequest = require('trim-request')

const {
  userInfo,
  listMeetings,
  createMeeting,
  getMeeting,
  updateMeeting,
  deleteMeeting,
  getWebSignature,
  notifications,
  createUser,
  listUsers,
  updateUserSettings,
  deleteUser
} = require('../controllers/zoom')
const {
  validateUserInfo,
  validateListMeetings,
  validateCreateMeeting,
  validateGetMeeting,
  validateUpdateMeeting,
  validateDeleteMeeting,
  validateGetWebSignature
} = require('../controllers/zoom/validators')

router.post('/userInfo', trimRequest.all, validateUserInfo, userInfo)

router.get(
  '/meetings/:meetingId',
  trimRequest.all,
  validateGetMeeting,
  getMeeting
)

router.get(
  '/:userId/meetings',
  trimRequest.all,
  validateListMeetings,
  listMeetings
)

router.post(
  '/createMeeting',
  trimRequest.all,
  validateCreateMeeting,
  createMeeting
)

router.patch(
  '/meetings/:meetingId',
  trimRequest.all,
  validateUpdateMeeting,
  updateMeeting
)

router.delete(
  '/meetings/:meetingId',
  trimRequest.all,
  validateDeleteMeeting,
  deleteMeeting
)

router.post(
  '/web-sdk/signature',
  trimRequest.all,
  validateGetWebSignature,
  getWebSignature
)

router.post('/notifications', trimRequest.all, notifications)

router.post('/users', trimRequest.all, createUser)

router.get('/users', trimRequest.all, listUsers)

router.patch('/users/:userId/settings', trimRequest.all, updateUserSettings)

router.delete('/users/:userId', trimRequest.all, deleteUser)

module.exports = router
