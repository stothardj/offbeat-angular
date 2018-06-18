const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const request = require('request');

const app = express();

const UPCOMING_EVENTS = 'https://api.meetup.com/Offbeat-Fun/events?photo-host=public&page=20&sig_id=214474886&sig=c8c6b6f5ac38abae010127a30e600755a3438e13';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/offbeat-site')));

app.get('/api/upcoming', (req, res, next) => {
    request(UPCOMING_EVENTS, { json: true }, (err, res2, body) => {
	if (err) {
	    next(err);
	}
	res.send(JSON.stringify(body));
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/offbeat-site/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
