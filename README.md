# tfk-opengov-meetings-api
API for opengov meetings

## API

/meetings
All meetings

/meetings/{meetingId}
One given meeting

### Calendar
API-endpoints for creating calendars

/meetings/calendar/year/{year}
All meetings for given year
Optional: boardId={boardId}
Filter meetings by boardId

/meetings/calendar/year/{year}
All meetings for given year
Optional: boardId={boardId}
Filter meetings by boardId

/meetings/calendar/year/{year}/month/{month}
All meetings a given month in a given year
Optional: boardId={boardId}
Filter meetings by boardId

### Next
/meetings/next
Get 10 next meetings
Optional: limit={limit}
Adjust number of meetings returned
Optional: boardId={boardId}
Filter next meetings by boardId