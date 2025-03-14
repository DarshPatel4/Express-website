const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
  })

  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/views/contact.html')
  })
  app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
  })

  app.get('/cake', (req, res) => {
    res.send('Hello cake!')
  })
  app.get('/cake/ahmedabad', (req, res) => {
    res.send('Hello ahmedabad cake!')
  })
  app.get('/delhi', (req, res) => {
    res.send('Hello surat cake!')
  })
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})