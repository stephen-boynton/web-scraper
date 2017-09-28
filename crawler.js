var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

//change the web address to the page you want to scrape

request("https://en.wikipedia.org/wiki/List_of_natural_satellites", function(
	error,
	response,
	body
) {
	if (error) {
		console.log("Error: " + error);
	}
	console.log("Status code: " + response.statusCode);
	const listOfWebStuff = [];
	const $ = cheerio.load(body);
	// Inside of $(" ") add the element that you want to scrape
	//Look at https://github.com/cheeriojs/cheerio for documentation
	const webStuff = $(".center")
		.parent()
		.each(function(i, el) {
			listOfWebStuff[i] = '"' + $(this).text() + '"';
		});

	fs.writeFile("scraped.js", listOfWebStuff, "utf8", function() {
		console.log("File has been written");
	});
});
