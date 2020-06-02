const qs = require('qs')
let a = {
  gs: '23'
}
console.log(qs.stringify(a))
console.log(JSON.stringify(a))