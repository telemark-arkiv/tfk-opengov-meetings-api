'use strict'

const Hapi = require('hapi')
const vision = require('vision')
const inert = require('inert')
const lout = require('lout')
const server = new Hapi.Server()
const config = require('./config')
const meetingsService = require('./index')

server.connection({
  port: config.OPENGOV_MEETINGS_SERVER_PORT,
  routes: {
    cors: {
      credentials: true
    }
  }
})

const plugins = [
  { register: vision },
  { register: inert },
  { register: lout },
  { register: meetingsService }
]

server.register(plugins, error => {
  if (error) {
    console.error('Failed to load a plugin:', error)
  }
})

module.exports.start = () => {
  server.start(() => {
    console.log('Server running at:', server.info.uri)
  })
}

module.exports.stop = () => {
  server.stop(() => {
    console.log('Server stopped')
  })
}
