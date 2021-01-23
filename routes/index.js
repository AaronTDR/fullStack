// Importar express
const express = require('express');
 // Agregando router
const router = express.Router();
 // Importando controlador pacienteController
const pacienteController = require('../controllers/pacienteController');

 // Agrega nuevos pacientes vía POST 
 router.post('/pacientes', pacienteController.nuevoCliente);

 // Obtiene todo los registros de la colección pacientes de la DB
 router.get('/pacientes', pacienteController.obtenerPacientes);
/*
PETICIONES GET Y PUT, EN CAO DE NECESITARSE YA CUENTAN CON SUS CONTROADORES ARMADOS EN controllers/pacienteController.js
 // Obtiene un paciente en específico por su ID
 router.get('/pacientes/:id', pacienteController.obtenerPaciente);

 // Actualizar un registro con un ID específico
 router.put('/pacientes/:id', pacienteController.actualizarPaciente);
*/
 // Eliminar un paciente por su ID
 router.delete('/pacientes/:id', pacienteController.eliminarPaciente);

module.exports = router;

