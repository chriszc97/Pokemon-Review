const db = require('../db');
const { Review } = require('../models');

db.on('error', console.error.bind(console, 'mongoDB connection error:'));
