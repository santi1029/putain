const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Dice al server di cercare i file statici direttamente nella cartella principale
app.use(express.static(__dirname));

// Quando qualcuno va sulla Home (/), gli manda il file index.html dalla root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});
