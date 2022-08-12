const Task = require('../models/Task');

const readTasks = async (req, res) => {
    const tasks = await Task.find().lean();

    res.render('index', { title: 'NodeJS Mongodb Crud', tasks });
}

const createTasks = async (req, res) => {
    console.log(req.body);

    try {
        const task = Task(req.body);

        await task.save();

        console.log("Se creo la tarea: ".green + task);

        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}

const deleteTasks = async (req, res) => {
    // console.log(req.params.id);

    try {
        await Task.findByIdAndRemove(req.params.id);

        console.log("Se elimino la tarea")

        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}

const editForm = async (req, res) => {
    console.log(req.params.id);

    try {
        const task = await Task.findById(req.params.id).lean();

        console.log(task);

        res.render("index", { task });
    } catch (error) {
        console.log(error.message);
    }
}

const editTasks = async (req, res) => {
    // console.log(req.params.id);

    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);

        console.log("Se actualizo la tarea")

        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}

const doneTasks = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        // task.done = true; // O tambien
        task.done = !task.done;

        await task.save();

        console.log("Tarea marcada como realizada");

        res.redirect("/");
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    readTasks,
    createTasks,
    deleteTasks,
    editForm,
    editTasks,
    doneTasks
}