const { handleError } = require('../../middleware/utils')
const socket = require('../../socket/socket')

const notifications = async (req, res) => {
  try {
    console.log('Meeting room: ', req.body.payload.object.id)
    console.log('event: ', req.body.event)
    socket
      .getInstance()
      .to('admin-room')
      .to('user-room')
      .emit('notifications', {
        room: req.body.payload.object.id,
        event: req.body.event,
        response: req.body
      })
    // console.log('Authorization: ', req.headers.authorization)
    res.status(200)
    res.send()
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { notifications }
