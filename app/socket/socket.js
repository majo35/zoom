let io

module.exports = {
  init: (httpServer) => {
    io = require('socket.io')(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    })
    return io
  },
  getInstance: () => {
    if (!io) {
      return new Error('Socket.io not initialize')
    }
    return io
  }
}
