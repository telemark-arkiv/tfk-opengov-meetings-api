'use strict'

const envs = process.env

module.exports = {
  OPENGOV_MEETINGS_DB_CONNECTION: envs.OPENGOV_MEETINGS_DB_CONNECTION || 'mongodb://localhost/opengov',
  OPENGOV_MEETINGS_SERVER_PORT: envs.OPENGOV_MEETINGS_SERVER_PORT || 8000
}
