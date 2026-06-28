const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Dice al server di servire i file statici (HTML, CSS, JS) dalla cartella "public"
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});
