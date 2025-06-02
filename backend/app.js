const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');
const db = require('./configs/db'); // Import the db connection
const logger = require('./utils/logger'); // Import logger

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL connection check
db.connect((err) => {
   if (err) {
      logger.error(`Error connecting to MySQL: ${err.stack}`);
      return;
   }

   logger.info('Connected to MySQL Database');
});

// Use all API routes (including /api/health)
app.use('/api', routes);

module.exports = app;
