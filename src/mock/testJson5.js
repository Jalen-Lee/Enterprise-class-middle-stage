const fs = require('fs')
const path = require('path')
const JSON5 = require('json5')

const json = fs.readFileSync(path.resolve(__dirname,'testJson5.json5'),'utf-8')
console.log(json)
const a= JSON5.parse(json)
console.log(a)
