const { clearCache } = require('ejs');
const mongoose = require('mongoose');
const personagensService = require('../services/personagem.services');

const findAllPersonagemController = async (req, res) => {
  const personagens = await personagensService.findAllPersonagemService();
  if (personagens.length == 0) {
    return res
      .status(400)
      .send({ message: `Não existe nenhum personagem cadastrado` });
  }
  res.send(personagens);
};

const findByIdPersonagemController = async (req, res) => {
  const parametroId = req.params.id;
  const escolhaPersonagem = await personagensService.findByIdPersonagensService(
    parametroId,
  );
  if (!escolhaPersonagem) {
    return res.status(400).send({ message: 'Esse personagem não existe!' });
  }
  res.send(escolhaPersonagem);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;
  if (!personagem.name || !personagem.image) {
    return res.status(400).send({ message: 'Envie os dois campos do personagem!' });
  }
  const novoPersonagem = await personagensService.createPersonagensService(personagem);

  res.send(novoPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const personagemEditada = req.body;
  console.log();
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  if (!personagemEditada.name || !personagemEditada.image) {
    return res.status(400).send({ message: 'Envie os dois campos do personagem!' });
  }

  const updatePersonagem = await personagensService.updatePersonagensService(
    idParam,
    personagemEditada,
  );
  console.log(updatePersonagem);
  res.send(updatePersonagem);
};

const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  const personagemEscolhida = await personagensService.deletePersonagensService(idParam);
  if (!personagemEscolhida) {
    return res.status(400).send({ message: 'Personagem não encontrado' });
  }
  res.send({ message: 'Personagem delatado com sucesso!' });
};

module.exports = {
  findAllPersonagemController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
  deletePersonagemController,
};
