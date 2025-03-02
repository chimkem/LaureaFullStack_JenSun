const fs = require("fs");
const path = require("path");

// Write file
fs.writeFile(path.join(__dirname, 'files', 'output.txt'), 'Tässä tekstiä, joka ei tarkoita mitään...', (err) => {
    if (err) throw err;

    // Modify file
    fs.appendFile(path.join(__dirname, 'files', 'output.txt'), '\n\nKappas, olenkin editoitu tiedosto! :D', (err) => {
        if (err) throw err;
        console.log('Tiedostoon lisätty extrana tekstiä...')
    })
    console.log('Tiedosto luotu onnistuneesti!');
})

// Exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`Johtain meni vikaan! ${err}`);
    process.exit(1);
})