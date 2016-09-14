'use strict'

const tap = require('tap')
const routes = require('../../routes/meetings')

tap.equal(routes.length, 6, 'There are 6 routes for meetings')
