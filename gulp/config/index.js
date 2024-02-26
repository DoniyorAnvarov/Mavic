// fs - nodejs ga tegishli File System

const fs = require('fs')
const path = './gulp/tasks'

const arrayOfPath = fs.readdirSync(path).map(fileName => fileName = `${path}/${fileName}`)

module.exports = arrayOfPath

// console.log(require('fs').readdirSync(__dirname));