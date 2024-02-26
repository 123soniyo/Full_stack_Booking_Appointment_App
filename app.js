    const express = require('express')
    const path = require('path')
    const bodyParser  = require('body-parser')
    const adminRoutes = require('./routes/admin')
    const shopRoutes = require('./routes/shop')
    const appointment = require('./routes/appointments')
    // const userRoutes = require('./controller/user'); // Change this import


    // const db = require('./util/database')
    const sequelize = require('./util/database')
    //const userRoutes=require('./routes/appointments');

    // var cors=require('cors');
    // app.use(cors());




    const app = express()
    

    app.use(bodyParser.urlencoded({extended:false}))

    app.use(express.static(path.join(__dirname,'public')))
    // app.use('/user', userRoutes); // Use the user routes here


    // app.use('/user',userRoutes);

    app.use(adminRoutes)
    app.use(shopRoutes)
    app.use(appointment)

    // +++++++++++++ sequelize +++++++++
    sequelize.sync()
    .then(result=>{
        // console.log(result)
        app.listen(3000)
    })

    .catch(err=>{
        console.log(err)
        
    })





    // db.execute('select * from products')
    // .then(result=>{
    //     console.log(result)
    // })
    // .catch(err=>{
    //     console.log(err)
    // });;

    app.use((req,res,next)=>{
        res.status(404).sendFile(path.join(__dirname,'views','404.html'))
        // res.status(404).send('<h1>Page Not Found</h1>')
    })


