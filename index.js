'use strict'

const meetings = require('./routes/meetings')

exports.register = (server, options, next) => {
  server.route(meetings)
  next()
}

exports.register.attributes = {
  pkg: require('./package.json')
}
