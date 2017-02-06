[![Build Status](https://travis-ci.org/telemark/tfk-opengov-meetings-api.svg?branch=master)](https://travis-ci.org/telemark/tfk-opengov-meetings-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-opengov-meetings-api

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tfk-opengov-meetings-api.svg)](https://greenkeeper.io/)
API for opengov meetings

## API

### Meetings
/meetings
All meetings

/meetings/{meetingId}
One given meeting

### Calendar
API-endpoints for creating calendars

/meetings/calendar/{year}
All meetings for given year
Optional: boardId={boardId}
Filter meetings by boardId

/meetings/calendar/{year}/{month}
All meetings a given month in a given year
Optional: boardId={boardId}
Filter meetings by boardId

/meetings/calendar/{year}/{month}/{day}
All meetings a given day in a given month a given year
Optional: boardId={boardId}
Filter meetings by boardId

### Next
/meetings/next
Get 10 next meetings
Optional: limit={limit}
Adjust number of meetings returned
Optional: boardId={boardId}
Filter next meetings by boardId

### Previous
/meetings/previous
Get 10 previous meetings
Optional: limit={limit}
Adjust number of meetings returned
Optional: boardId={boardId}
Filter previous meetings by boardId