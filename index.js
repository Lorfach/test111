const express = require('express');
// const fs = require('fs');
const path = require('path');
const cors = require('cors'); // импортируем cors

const app = express();

app.use(cors({
  origin: '*' // или '*' для разрешения всех источников
}));
console.log('aba');

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запускаем сервер
app.listen(8080, () => {
  console.log('Server is running on http://localhost:5000');
});