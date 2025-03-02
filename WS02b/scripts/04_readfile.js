const fs = require("fs");
const path = require("path");

// Read file
fs.readFile(path.join(__dirname, 'files', 'example.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Johtain meni vikaan! ${err}`);
    process.exit(1);
})