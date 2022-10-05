const { response } = require("express");
const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/taskControllers")

router.post("/create", (request, response) => {

    TaskController.createTask(request.body).then((result) => {
        response.send(result)
    })

})

router.get("/:id", (request, response) => {
    TaskController.findTask(request.params.id)
        .then((result) => {
            if (!result) {
                response.send(`The task "${request.params.id}" cannot be found.`)
            }
            response.send(result)
        })
})

router.patch("/:id/complete", (request, response) => {
    TaskController.updateStatus(request.params.id)
        .then((result, error) => {
            if (error) {
                console.log(error);
                return error
            }
            response.send(result)
        })

})

module.exports = router;
