'use strict'

const fs = require('fs')
const exec = require('child_process').execFile
const dataDirectory = 'data'
const dataBase = 'opengov'
const collection = 'meetings'
const isJsonFile = file => file.indexOf('.json') > -1
const files = fs.readdirSync(dataDirectory).filter(isJsonFile)

files.forEach(file => {
  const fileName = `${dataDirectory}/${file}`
  exec('mongoimport', ['--db', dataBase, '--collection', collection, '--file', fileName], (error, stderr, stdout) => {
    if (error) {
      console.error(error)
    } else {
      console.log(stderr)
      console.log(stdout)
    }
  })
  console.log('Data imported')
})
