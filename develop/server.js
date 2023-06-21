const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./index.js');

const PORT = process.env.port || 3001;

const app = express();



app.use(express.json());

app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`));
