const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, 'files', 'watch.txt');
const message = '--- My Second node.js app ---'
// --------------------------------------------
// Message
console.log(message);

// Read file
fs.readFile(path.join(__dirname, 'files', 'example.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})
// Write file
fs.writeFile(path.join(__dirname, 'files', 'output.txt'), 'Tässä tekstiä, joka ei tarkoita mitään...', (err) => {
    if (err) throw err;

    // Modify file
    fs.appendFile(path.join(__dirname, 'files', 'output.txt'), '\n\nKappas, olenkin editoitu tiedosto! :D', (err) => {
        if (err) throw err;
    })
    console.log('Tiedosto luotu onnistuneesti!');
})
// Delete a file
fs.unlink(path.join(__dirname, 'files', 'temp.txt'), (err) => {
    if (err) throw err;
    console.log('Tiedosto poistettu onnistuneesti!');
})
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
// Watching for file changes
fs.watch(filePath, (eventType, filename) => {
    console.log(`Tiedostoa ${filename} on muokattu seuraavalla tavalla: ${eventType}`);
});
// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Johtain meni vikaan! ${err}`);
    process.exit(1);
})