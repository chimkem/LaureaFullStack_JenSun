const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, 'files', 'watch.txt');

console.log("Tarkkailu käynnistetty!")

// Watching for file changes
fs.watch(filePath, (eventType, filename) => {
    console.log(`Tiedostoa ${filename} on muokattu seuraavalla tavalla: ${eventType}`);
});
// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Johtain meni vikaan! ${err}`);
    process.exit(1);
})