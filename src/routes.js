const { Router } = require("express");

const ProjectController = require("./app/controllers/ProjectController");
const TaskController = require("./app/controllers/TaskController");
const checkProjectExists = require("./app/middlewares/checkProjectExists");
const numberOfRequisitions = require("./app/middlewares/numberOfRequisitions");

const routes = new Router();

routes.use(numberOfRequisitions);

routes.post("/projects", ProjectController.store);
routes.post("/projects/:id/tasks", checkProjectExists, TaskController.update);

routes.get("/projects", ProjectController.index);

routes.put("/projects/:id", checkProjectExists, ProjectController.update);
routes.delete("/projects/:id", checkProjectExists, ProjectController.delete);

module.exports = routes;
