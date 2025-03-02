const fs = require("fs");
const path = require("path");

// Delete a file
fs.unlink(path.join(__dirname, 'files', 'temp.txt'), (err) => {
    if (err) throw err;
    console.log('Tiedosto poistettu onnistuneesti!');
})
// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Johtain meni vikaan! ${err}`);
    process.exit(1);
})