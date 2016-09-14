'use strict'

const tap = require('tap')
const handlers = require('../../handlers/meetings')

tap.equal(Object.keys(handlers).length, 4, 'There are 4 meetings handlers')

tap.ok(handlers.handleMeetings, 'Handler has method handleMeetings')

tap.ok(handlers.handleMeetingsCalendar, 'Handler has method handleMeetingsCalendar')

tap.ok(handlers.handleMeetingsNext, 'Handler has method handleMeetingsNext')

tap.ok(handlers.handleMeetingsPrevious, 'Handler has method handleMeetingsPrevious')
