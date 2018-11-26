'use strict'

const mongojs = require('mongojs')
const datePadding = require('../lib/date-padding')
const config = require('../config')
const dbOpengov = mongojs(config.OPENGOV_MEETINGS_DB_CONNECTION)
const meetings = dbOpengov.collection('meetings')

module.exports.handleMeetings = (request, reply) => {
  const meetingId = request.params.meetingId
  var query = {}
  if (meetingId) {
    query._id = mongojs.ObjectId(meetingId)
  }
  meetings.find(query, (error, data) => {
    reply(error || data)
  })
}

module.exports.handleMeetingsCalendar = (request, reply) => {
  const year = request.params.year
  const month = request.params.month
  const day = request.params.day
  const boardId = request.query.boardId
  var query = {}
  if (year) {
    query.year = parseInt(year, 10)
  }
  if (month) {
    query.month = datePadding(month)
  }
  if (day) {
    query.day = datePadding(day)
  }
  if (boardId) {
    query.boardId = boardId
  }
  meetings.find(query).sort({ yearMonthDay: 1 }, (error, data) => {
    reply(error || data)
  })
}

module.exports.handleMeetingsNext = (request, reply) => {
  const now = new Date()
  const year = now.getFullYear()
  const month = datePadding(now.getMonth() + 1)
  const day = datePadding(now.getDate())
  const yearMonthDay = parseInt(`${year}${month}${day}`, 10)
  const limit = request.query.limit ? parseInt(request.query.limit, 10) : 10
  const boardId = request.query.boardId
  var query = {
    yearMonthDay: { '$gte': yearMonthDay }
  }
  if (boardId) {
    query.boardId = boardId
  }
  meetings.find(query).limit(limit).sort({ yearMonthDay: 1 }, (error, data) => {
    reply(error || data)
  })
}

module.exports.handleMeetingsPrevious = (request, reply) => {
  const now = new Date()
  const year = now.getFullYear()
  const month = datePadding(now.getMonth() + 1)
  const day = datePadding(now.getDate())
  const yearMonthDay = parseInt(`${year}${month}${day}`, 10)
  const limit = request.query.limit ? parseInt(request.query.limit, 10) : 10
  const boardId = request.query.boardId
  var query = {
    yearMonthDay: { '$lte': yearMonthDay }
  }
  if (boardId) {
    query.boardId = boardId
  }
  meetings.find(query).limit(limit).sort({ yearMonthDay: -1 }, (error, data) => {
    reply(error || data)
  })
}
