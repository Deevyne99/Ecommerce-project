const express = require('express')

const app = express()

const port = 3000

const start = async () => {
  app.listen(port, () => console.log(`server is listening on Port ${port}`))
}

start()
