const express = require('express')
const path = require('path')
// init app
const app = express()
// middleware
app.use('/static1', express.static(path.resolve(__dirname, 'public/spa1/static')))
app.use('/static2', express.static(path.resolve(__dirname, 'public/spa2/static')))

// routing
app.get('/app1', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/spa1/index.html'))
})

app.get('/app2', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/spa2/index.html'))
})
// setup
const port = process.env.PORT || 3136
app.listen(port, ()=>{
    console.log(`> Listening at port ${port}`)
})