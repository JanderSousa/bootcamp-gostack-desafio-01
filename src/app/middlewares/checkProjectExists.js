const data = require("../data");

function checkProjectExists(req, res, next) {
  const { id } = req.params;
  let project;

  const projects = data.loadData();

  if (projects) {
    project = projects.find(p => p.id == id);
  }

  if (!project) {
    return res.status(400).json({ error: "Project does not exists." });
  }

  return next();
}

module.exports = checkProjectExists;
