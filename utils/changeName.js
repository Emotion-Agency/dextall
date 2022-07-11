/*eslint-disable*/
const fs = require('fs')

const dir = './public/images/storytelling'

fs.readdir(dir, function (_, items) {
  console.log(items)

  items.forEach((item, idx) => {
    fs.rename(dir + '/' + item, dir + '/' + idx + '.webp', () => {})
  })
})
