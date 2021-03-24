const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const validateGetWebSignature = [
  check('meetingNumber')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY'),
  check('role')
    .exists()
    .withMessage('MISSING')
    .not()
    .isEmpty()
    .withMessage('IS_EMPTY')
    .isIn([1, 0])
    .withMessage('USER_NOT_IN_KNOWN_ROLE'),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateGetWebSignature }
