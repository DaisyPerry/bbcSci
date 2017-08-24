var request = require("request");

var cheerio = require("cheerio");



request("http://www.bbc.com/news/science_and_environment", function(error, response, html) {

	var $ = cheerio.load(html);

	var result = [];

	$("a.title-link").each(function(i, element){

		var title = $(this).text();

		var link = $(this).attr("href");

		 result.push({
	      title: title,
	      link: "www.bbc.com" + link
	    });


	});

	console.log(result);

});