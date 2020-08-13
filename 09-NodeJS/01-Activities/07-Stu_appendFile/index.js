const fs = require('fs');

fs.appendFile("log.txt", '${process.argv[2]}\n', function (error, data) {
if (error) {
    console.log(error);
    } else {
        console.log("success?");
    }
})
