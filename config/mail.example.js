// Copy in your particulars and rename this to mail.js
module.exports = {
  service: "SendGrid",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: "kneumei@gmail.com",
    pass: "wbbcvhqhqpqvhman"
  },
  ignoreTLS: false,
  debug: true,
  maxConnections: 5 // Default is 5
}

