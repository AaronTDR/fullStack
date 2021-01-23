// Importando dependencias
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
//const bodyParser = require('body-parser');
const cors = require('cors');


// Crear servidor
const app = express();

// Configurar CORS
const whiteList = ['http://localhost:3000'];
const corsOptions = {
     origin: (origin, callback) => {
          const existe = whiteList.some( dominio => dominio === origin);
          if(existe){
               callback(null, true);
          }else{
               callback(new Error ( 'No permitido por CORS'));

          }
     }
}

// Habilitar CORS
app.use(cors());

// Conectar a MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
});

// Habilitar los middleware de express que harán la función del antiguo "body-parser" para leer los datos del formulario. Ejemplo: console.log(req.body)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Habilitar routing
app.use('/', routes);

// Definir un puerto y arrancar el servidor
app.listen(4000, () => {
     console.log("servidor funcionando");
})