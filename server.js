const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, "client", "build")))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 4999

app.listen(port, () => console.log(`Server started on port ${port}`))