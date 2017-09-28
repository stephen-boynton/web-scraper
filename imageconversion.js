const images = require("./moonimages");
const imageArr = require("./imagesArray");
const fs = require("fs");

let output = JSON.stringify(imageArr);

fs.writeFile("moonimages.js", output, "utf8", () => {
	console.log("File has been written");
});
