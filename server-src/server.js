const express = require('express');
const http    = require('http');
const path    = require('path');

const root = '';
const port = process.env.PORT || '3000';

// init express app
const app = express();

// define apis
const treeLoadAPI = require('./routes/api/tree-load');

// define static path
app.use(express.static(path.join(__dirname, root)));

// route apis
app.use('/api/tree', treeLoadAPI);

// redirect to index for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// get and set port
app.set('port', port);

// init html server
const server = http.createServer(app);

server.listen(port, () => console.log(`mndlsrv running:${port}`));
