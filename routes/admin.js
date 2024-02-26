const express = require('express')

const router = express.Router()
const path = require('path')


router.get('/add-product',(req,res,next)=>{
    //serving html file
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    // res.send("<form action='/product' method ='POST'><input type ='text' name ='title'><button type = 'submit'>Add Products</button></form>")
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    //  res.redirect('/product-item')
})

router.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','login.html'))
    
})


module.exports = router