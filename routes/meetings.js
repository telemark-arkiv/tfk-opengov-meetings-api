'use strict'

const Handlers = require('../handlers/meetings')

module.exports = [
  {
    method: 'GET',
    path: '/meetings',
    config: {
      handler: Handlers.handleMeetings,
      description: 'Show all meetings'
    }
  },
  {
    method: 'GET',
    path: '/meetings/{meetingId}',
    config: {
      handler: Handlers.handleMeetings,
      description: 'Show a given meeting'
    }
  },
  {
    method: 'GET',
    path: '/meetings/calendar/{year}',
    config: {
      handler: Handlers.handleMeetingsCalendar,
      description: 'Show meetings for a given year'
    }
  },
  {
    method: 'GET',
    path: '/meetings/calendar/{year}/{month}',
    config: {
      handler: Handlers.handleMeetingsCalendar,
      description: 'Show meetings for a given month'
    }
  },
  {
    method: 'GET',
    path: '/meetings/calendar/{year}/{month}/{day}',
    config: {
      handler: Handlers.handleMeetingsCalendar,
      description: 'Show meetings for a given day'
    }
  },
  {
    method: 'GET',
    path: '/meetings/next',
    config: {
      handler: Handlers.handleMeetingsNext,
      description: 'Show next meetings'
    }
  }
]
