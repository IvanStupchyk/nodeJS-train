const EventEmitter = require('events')

class Logger extends EventEmitter {
  log(message) {
    this.emit('message', `${message} ${Date.now()}`)
  }
}

const logger = new Logger()

//ставим прослушку события
logger.on('message', data => {
  console.log(data)
})

logger.log('Hi!')








