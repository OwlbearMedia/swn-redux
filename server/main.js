const api = require('./api');
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const dir = path.join(__dirname, '../dist');
app.use(serveStatic(dir));

// Routes
app.get('/api', (request, response) => {
  response.send('Stars Without Number API is running.');
});

app.get('/api/:noun/:id', (request, response) => {
  api.get(request).then((sector) => {
    response.send(sector);
  });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server started on ${port}`);
