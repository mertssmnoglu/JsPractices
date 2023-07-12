const Logger = require('./logger')
const logger = new Logger()

logger.on('messageLogged', function (data) {
    console.log('Message Logged', data)
})

logger.log('mesaj')
