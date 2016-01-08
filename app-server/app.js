import express from 'express';
import logger from 'morgan';
import http from 'http';
import path from 'path';

import apiRoutes from './routes/api';
import webRoutes from './routes/web';

import './services/mongo';
import './models/note';

const app = express();

app.set('view engine', 'hbs');
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRoutes);
app.use(webRoutes);

const server = http.createServer(app);

server.listen(3000);
server.on('listening', () => {
  console.log('Listening on 3003');
});
