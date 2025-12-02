const fullname = " Chinut  satchaphornwaranyu  "

const cleanname = fullname.trim()
console.log(`Trimmed Name:'${cleanname}'`)

const nameParts = cleanname.split(" ")
console.log('Name Parts:' ,nameParts)

const finalParts = nameParts.filter(Boolean)
console.log(`Filter Name :'${finalParts}'`)

const firstName = finalParts[0]
console.log(`First Name: '${firstName}'`)