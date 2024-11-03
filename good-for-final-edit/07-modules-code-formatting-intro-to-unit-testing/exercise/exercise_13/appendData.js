// appendData.js
const fs = require("fs");

fs.appendFile("output.txt", " Additional text.", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data appended to file");
});
