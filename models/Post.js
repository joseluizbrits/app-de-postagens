const db = require('./db')

// Criando tabela postagens
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

/*
    A linha de comando abaixo só serve para a
    primeira vez que o arquivo for executado, caso
    contrario irá deletar toda a tabela e criar uma nova
*/

// Post.sync({ force: true })

module.exports = Post