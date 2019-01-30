const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', function(req, res, next) {
	// constructing URL request
	var description = req.query.description;
	var location = req.query.location;
	var baseUrl = "https://jobs.github.com/positions.json?description=" + description + "&location=" + location + "&full_time=true";

	request(baseUrl, function(error, response, body) {
		if (!error) {
			if (response.statusCode == 200) {
				// successful URL request with no errors
				var serializedResponse = JSON.parse(body);
				res.render("result", {data: serializedResponse});
			}
			else {
				console.log("GitHub Jobs API responded with an improper status code.");
			}
		}
		else {
			console.log("Error caught with URL request.");
		}
	});
});

module.exports = router;
