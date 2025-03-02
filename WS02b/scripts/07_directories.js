const fs = require("fs");
const path = require("path");

// Create a directory if it does not exist
if (!fs.existsSync('./testDir')) {
    fs.mkdir('./testDir', (err) => {
        if (err) throw err;
        console.log('Kansio luotu onnistuneesti!');
    });
}
// Remove a directory if it does exist
if (fs.existsSync('./testDir')) {
    fs.rmdir('./testDir', (err) => {
        if (err) throw err;
        console.log('Kansio poistettu onnistuneesti!');
    });
}
// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Johtain meni vikaan! ${err}`);
    process.exit(1);
})