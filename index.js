const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
const Post = require('./models/Post')

// Template Engine
app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', './views')

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Rotas
app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then(post => {
        res.render('home', {post: post.map(post => post.toJSON())})
    })
})

app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch(err => {
        res.send('Houve um erro: ' + err)
    })
})

app.listen(8081, () => {
    console.log('Servidor rodando na url http://localhost:8081')
})