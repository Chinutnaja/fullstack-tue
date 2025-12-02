let sentence = 'JavaScript is fun, but sometimes javascript can be tricky.'
let censored = 'javascript'

let regx = new RegExp(censored,'gi')
let result = sentence.replace(regx,'***')
console.log(result)