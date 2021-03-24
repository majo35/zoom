const { validateUserInfo } = require('./validateUserInfo')
const { validateListMeetings } = require('./validateListMeetings')
const { validateCreateMeeting } = require('./validateCreateMeeting')
const { validateGetMeeting } = require('./validateGetMeeting')
const { validateUpdateMeeting } = require('./validateUpdateMeeting')
const { validateDeleteMeeting } = require('./validateDeleteMeeting')
const { validateGetWebSignature } = require('./validateGetWebSignature')

module.exports = {
  validateUserInfo,
  validateListMeetings,
  validateCreateMeeting,
  validateGetMeeting,
  validateUpdateMeeting,
  validateDeleteMeeting,
  validateGetWebSignature
}
