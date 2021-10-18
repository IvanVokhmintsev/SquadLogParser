const { Sequelize } = require('sequelize')

const getModels = async () => {
  const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'db.sqlite'
  })
  const User = sequelize.define('User', {
    steamID: {
      type: Sequelize.STRING,
      unique: true
    },
    kills: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    deaths: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  })

  const LayerAndSide = sequelize.define('Layer', {
    layer: Sequelize.STRING,
    side: Sequelize.STRING,
    wins: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  })
  await User.sync()
  await LayerAndSide.sync()

  const models = [User, LayerAndSide]

  return models
}

module.exports = getModels()
