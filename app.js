const fs = require('fs');
const path = require('path');

// Carrega o banco de dados de músicas
const sampleDatabase = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'songs.json')),
);

function findSample() {
  const songName = document.getElementById('songInput').value;
  const output = document.getElementById('output');
  const normalizedSongName = songName.toLowerCase().trim();

  if (sampleDatabase[normalizedSongName]) {
    const song = sampleDatabase[normalizedSongName];
    output.innerText = `Música: ${songName}\nArtista: ${song.artist}\nAno: ${song.year}\nOrigem do Sample: ${song.sampleOrigin}`;
  } else {
    output.innerText = `Desculpe, a música "${songName}" não foi encontrada no banco de dados. Tente outra música famosa!`;
  }
}
