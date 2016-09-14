'use strict'

const tap = require('tap')
const handlers = require('../../handlers/meetings')

tap.equal(Object.keys(handlers).length, 3, 'There are 3 meetings handlers')

tap.ok(handlers.handleMeetings, 'Handler has method handleMeetings')

tap.ok(handlers.handleMeetingsCalendar, 'Handler has method handleMeetingsCalendar')

tap.ok(handlers.handleMeetingsNext, 'Handler has method handleMeetingsNext')
