const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagem.controllers');

route.get('/todos-personagens', controllerPersonagens.findAllPersonagemController);
route.get('/personagens/:id', controllerPersonagens.findByIdPersonagemController);
route.post('/create', controllerPersonagens.createPersonagemController);
route.put('/update/:id', controllerPersonagens.updatePersonagemController);
route.delete('/delete/:id', controllerPersonagens.deletePersonagemController);

module.exports = route;
