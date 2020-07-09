const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001


app.get('/', async (request, response) => {
    try {
      response.json({
        msg: 'Hello World'
      })
    } catch (e) {
      response.status(500).json({ msg: e.status })
    }
  });


  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({ message: err.message })
  })
  
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`))