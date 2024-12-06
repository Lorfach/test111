const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // импортируем cors

const app = express();

app.use(cors({
  origin: '*' // или '*' для разрешения всех источников
}));

// app.use(express.json({ limit: "999999mb", extended: true }));
// app.use(
//   express.urlencoded({ limit: "999999mb", extended: true, parameterLimit: Infinity })
// );

// app.use(express.json());
console.log('aba');


app.get('*', (req, res) => {
  // res.sendFile(path.join('D:/all/web/new/sliv/ege/index.html', 'index.html'));
  // console.log(req);
  res.status(200).send('abab')
});

// Запускаем сервер
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});