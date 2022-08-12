var express = require('express');
const { readTasks, createTasks, deleteTasks, editForm, editTasks, doneTasks } = require('../controllers/indexController');
const Task = require('../models/Task');
var router = express.Router();

/* GET home page. */
router.get('/', readTasks);

// crear tareas
router.post("/create", createTasks);

// eliminar tareas
router.get("/delete/:id", deleteTasks);

// editar tareas
router.get("/edit/:id", editForm);
router.post("/edit/:id", editTasks);


router.get("/done/:id", doneTasks);

module.exports = router;
