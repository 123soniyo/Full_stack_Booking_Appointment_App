// ++++++++++++++++ Sequelize ++++++++++++++++

const Sequelize = require('sequelize')

// sequelize take three parameter (schemaname,username or ShadowRoot,password)
const sequelize = new Sequelize('node-complete','root','Shruti@2105',
{
    dialect:'mysql',
    host:'localhost'
});

module.exports =sequelize 


















// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'Shruti@2105'
// })

// module.exports = pool.promise()
