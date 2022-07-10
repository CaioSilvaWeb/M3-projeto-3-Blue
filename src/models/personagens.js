const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Personagem = mongoose.model('apipersonagens', personagemSchema);

module.exports = Personagem;
