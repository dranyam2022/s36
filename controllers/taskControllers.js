const Task = require("../models/tasks");


module.exports.createTask = (data) => {
    let newTask = new Task({
        name: data.name
    })
    return newTask.save()
        .then((savedTask, error) => {
            if (error) {
                console.log(error)
                return error
            }
            return savedTask
        })
}

module.exports.findTask = (task_id) => {
    return Task.findById(task_id)
        .then((result, error) => {
            if (error) {
                console.log(error)
                return error
            }
            return result
        })
}

module.exports.updateStatus = (task_id) => {
    return Task.findByIdAndUpdate(task_id, { status: "completed" })
        .then((result, error) => {
            if (error) {
                console.log(error)
                return error
            }
            return Task.findById(task_id)
        })
}