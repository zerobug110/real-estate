require("dotenv").config()
const http = require("http")
const colors = require("colors")
const PORT = process.env.PORT || 5000
const app = require('./src/app/app')
require("./src/config/dbConnect");

//========= server=====
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`******************* server running on port ${PORT} ***********************` .yellow)
})