const { models } = require('mongoose');
const Personagem = require('../models/personagens');

const findAllPersonagemService = async () => {
  const personagem = await Personagem.find();
  console.log(personagem);
  return personagem;
};

const findByIdPersonagensService = async (Id) => {
  const onePersonagem = await Personagem.findById(Id);
  return onePersonagem;
};

const createPersonagensService = async (novoPersonagem) => {
  const createdPersonagem = await Personagem.create(novoPersonagem);
  return createdPersonagem;
};

const updatePersonagensService = async (id, personagemEditado) => {
  const updatePersonagem = await Personagem.findByIdAndUpdate(id, personagemEditado);
  return updatePersonagem;
};

const deletePersonagensService = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};

module.exports = {
  findAllPersonagemService,
  findByIdPersonagensService,
  createPersonagensService,
  updatePersonagensService,
  deletePersonagensService,
};
