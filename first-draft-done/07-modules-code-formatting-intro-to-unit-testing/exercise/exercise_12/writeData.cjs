// writeData.js
const fs = require("fs");

fs.writeFile("output.txt", "Hello, file system!", "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Data written to file");
});
