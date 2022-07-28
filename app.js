require('dotenv').config()
const positivity = require('positivity-api')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: positivity.random(),
     from: process.env.TWILIO_NUMBER,
     to: '+595991709564'
   })
  .then(message => console.log(message.sid));
