// importar mongoose, el objeto Schema y el objeto model
const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskShema = new Schema({
    title:{
        type: String,
        require: true,
        unique: true,
        trim: true
    },
    description:{
        type: String,
        require: true
    }, 
    done:{
        type: Boolean,
        default: false,
        versionKey: false
    },
}, {
    timestamps: true
});

const Task = mongoose.model("Task", taskShema);

module.exports = Task;