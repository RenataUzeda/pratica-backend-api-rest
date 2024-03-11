const express = require('express')
const { excluirAluno, obterAluno, cadastrarAluno, listarAlunos } = require('./controladores/alunos')
const { validarAcesso } = require('./intermediarios/validarAcesso')

const rotas = express()


rotas.get('/alunos', listarAlunos)

rotas.use(validarAcesso)

rotas.get('/alunos/:id', obterAluno)
rotas.post('/alunos', cadastrarAluno)
rotas.delete('/alunos/:id', excluirAluno)



module.exports = rotas