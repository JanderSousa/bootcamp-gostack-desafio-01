const fs = require("fs");
const contentFilePath = "./content.json";

class Data {
  storeData(content) {
    try {
      const contentString = JSON.stringify(content);
      return fs.writeFileSync(contentFilePath, contentString);
    } catch (err) {
      console.error(err);
    }
  }

  loadData() {
    try {
      const fileBuffer = fs.readFileSync(contentFilePath, "utf-8");
      const contentJson = JSON.parse(fileBuffer);
      return contentJson;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = new Data();
