const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const userInfo = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
      type:Sequelize.STRING,
      allowNull:false
    },
    email:{
      type:Sequelize.STRING,
      allowNull:false,
      unique:true
    },
    phone:{
      type:Sequelize.INTEGER,
      allowNull:false,
      unique:true
    },
    Description:{
      type:Sequelize.STRING,
      allowNull:false,
      unique:true
    }

})

module.exports= userInfo