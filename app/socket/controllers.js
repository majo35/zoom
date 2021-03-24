const msgController = function (payload) {
  console.log('test:msg: ', payload)
  this.emit('test:msg', { server: 'test' })
}

module.exports = (socket) => {
  socket.on('test:msg', msgController)
}
