const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const validateListMeetings = [
  check('userId')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateListMeetings }
