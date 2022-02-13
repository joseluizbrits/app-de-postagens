const Sequelize = require('sequelize')

// Conexão com banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', '2195992705', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}