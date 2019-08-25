const data = require("../data");

class TaskController {
  update(req, res) {
    const { title } = req.body;
    const id = req.params.id;

    const projects = data.loadData();

    const project = projects.find(p => p.id == id);
    project.tasks.push(title);

    data.storeData(projects);

    return res.json(project);
  }
}

module.exports = new TaskController();
