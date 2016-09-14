'use strict'

const tap = require('tap')
const routes = require('../../routes/meetings')

tap.equal(routes.length, 7, 'There are 7 routes for meetings')
