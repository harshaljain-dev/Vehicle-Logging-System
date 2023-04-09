const crypto = require('crypto')

const private_key = crypto.randomBytes(32).toString('hex')
console.log(private_key)