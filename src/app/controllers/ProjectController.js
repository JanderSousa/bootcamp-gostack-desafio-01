const data = require("../data");

class ProjectController {
  store(req, res) {
    const { id, title } = req.body;

    let projects = data.loadData();

    if (projects) {
      const project = projects.find(p => p.id == id);

      if (project) {
        return res.status(400).json({ error: "Project already exists." });
      }
    } else {
      projects = [];
    }

    const newProject = { id, title, tasks: [] };

    projects.push(newProject);

    data.storeData(projects);

    return res.json(newProject);
  }

  index(req, res) {
    const projects = data.loadData();

    if (projects) {
      return res.json(projects);
    } else {
      return res.json([]);
    }
  }

  update(req, res) {
    const { title } = req.body;
    const id = req.params.id;

    const projects = data.loadData();

    const project = projects.find(p => p.id == id);
    project.title = title;

    data.storeData(projects);

    return res.json(project);
  }

  delete(req, res) {
    const id = req.params.id;

    const projects = data.loadData();

    const project = projects.find(p => p.id == id);
    projects.pop(project);

    data.storeData(projects);

    return res.json(projects);
  }
}

module.exports = new ProjectController();
