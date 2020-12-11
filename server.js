const express = require('express') // faz o servidor
const nunjucks = require('nunjucks') // template engine ou motor de templates
const routes = require("./routes")

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape: false, // permite no Nunjucks usar html
  noCache: true
})

server.listen(5000, function() {
  console.log("server is running")
})