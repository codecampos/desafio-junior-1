const Sequelize = require('sequelize')
const database = require('../infrastructure/database.js')
const Pet = require('./Pet.js')

const PetOwner = database.define('petOwner', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  houseNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

PetOwner.hasMany(Pet, {foreignKey: 'petOwner_id', as: 'pets' })

module.exports = PetOwner