const fs = require('fs')
const moment = require('moment')

const ruleFiles = fs.readdirSync('./rules').filter(file => file.endsWith('.js'))
const rules = []
for (const ruleFile of ruleFiles) {
  const rule = require(`./rules/${ruleFile}`)
  rules.push(rule)
}

module.exports = function (line) {
  for (const rule of rules) {
    const match = line.match(rule.regex)
    if (!match) continue

    match[1] = moment.utc(match[1], 'YYYY.MM.DD-hh.mm.ss:SSS').toDate()
    match[2] = parseInt(match[2])

    return rule.onMatch(match)
  }
}
