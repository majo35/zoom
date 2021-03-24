const { userInfo } = require('./userInfo')
const { listMeetings } = require('./listMeetings')
const { createMeeting } = require('./createMeeting')
const { getMeeting } = require('./getMeeting')
const { updateMeeting } = require('./updateMeeting')
const { deleteMeeting } = require('./deleteMeeting')
const { getWebSignature } = require('./getWebSignature')
const { notifications } = require('./notifications')

module.exports = {
  userInfo,
  listMeetings,
  createMeeting,
  getMeeting,
  updateMeeting,
  deleteMeeting,
  getWebSignature,
  notifications
}
