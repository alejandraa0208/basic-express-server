'use strict';

const dotenv = require('dotenv');
const server = require('./src/server');
const PORT = process.env.PORT || 3001;

dotenv.config();

server.start(PORT);