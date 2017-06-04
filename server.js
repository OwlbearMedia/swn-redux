const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');

const app = express();
const dir = path.join(__dirname, 'dist');
app.use(serveStatic(dir));

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`server started on ${port}`);
