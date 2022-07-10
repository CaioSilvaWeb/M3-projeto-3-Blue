
const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/listapersonagens', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`mongoDB conectado!`))
    .catch((error) =>
      console.log(`erro ao conectar com o mongoDB, erro: ${error}`),
    );
};

module.exports = connectToDatabase;
