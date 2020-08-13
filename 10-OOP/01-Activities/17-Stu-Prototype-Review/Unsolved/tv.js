const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function() {};

// Find a tv show actor

// Find a tv show

TV.prototype.findShow = function() {}

TV.prototype.findShow = function(show) {
  const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

  axios.get(URL).then(response => {
    const showData = [
      "Name: " + response.data.name,
      "Country: " + response.data.code,
      "DOB: " + response.data.birthday,
      "Gender: " + response.data.gender,
      "TV Maze URL: " + response.data._links

    ].join("\n\n");

    fs.appendFile("log.txt", showData, err => {
      if (err) throw err;

      console.log(showData);
    });
  });
};

module.exports = TV;
