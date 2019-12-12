const http = require('http')
const hostname = '127.0.0.1'
const fs = require('fs')
const port = process.env.PORT || 3000

fs.readFile('./index.html', (err, html) => {
  if (err) {
    throw err
  }
  http.createServer((req, res) => {
  res.writeHeader(200, {"Content-Type" : "text/html"})
  res.write(html)
  res.end()
  }).listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`)
   })
 })
