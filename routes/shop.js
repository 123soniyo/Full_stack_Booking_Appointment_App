const path = require('path')
const express = require('express')

const routes = express.Router()

routes.get('/',(req,res,next)=>{
    //serving html file
      res.sendFile(path.join(__dirname,'../' ,'views','shop.html'))
    // res.send('<h1>hello from express</h1>')
})


module.exports = routes;