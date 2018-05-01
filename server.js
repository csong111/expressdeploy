var express = require('express')
var app = express()
app.get('/', (req, res) => {
    res.send("Javascript Rocks!");
})
app.listen(3000)