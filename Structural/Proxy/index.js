var path = require("path");
var FSProxy = require("./FSProxy");

var fs = new FSProxy(require("fs"));

var txtFile = path.join(__dirname, "Readme.txt");
var mdFile = path.join(__dirname, "Readme.md");

var result = (error, content) => {
  if (error) {
    console.error(error);
    process.exit(0);
  }

  console.log("Reading file...");
  console.log(content);
};

//fs.readFile(txtFile, "UTF-8", result);
fs.readFile(mdFile, "UTF-8", result);
