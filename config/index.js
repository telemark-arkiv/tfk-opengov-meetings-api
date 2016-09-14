'use strict'

const envs = process.env

module.exports = {
  OPENGOV_DB_CONNECTION_MEETINGS: envs.OPENGOV_DB_CONNECTION_MEETINGS || 'mongodb://localhost/opengov'
}
