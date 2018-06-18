const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/offbeat-site')));

app.get('/api/upcoming', (req, res) => {
    res.send(JSON.stringify([
	{ name: 'From the server! Glow-in-the-dark Kan-jam' },
	{ name: 'Game Jam (Make Board Games)' },
	{ name: 'Monthly Matinee (Jurassic World: Fallen Kingdom)' },
	{ name: 'Music Lounge' }
    ]));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/offbeat-site/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
