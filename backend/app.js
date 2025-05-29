require("dotenv").config(); // Load .env variables

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");
const db = require("./configs/db"); // DB connection pool
const logger = require("./utils/logger"); // Logger
const healthCheckRoute = require("./routes/healthCheck"); // Health check route

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test DB connection at startup
db.getConnection()
  .then((connection) => {
    logger.info("✅ Connected to MySQL Database");
    connection.release(); // Release the connection back to the pool
  })
  .catch((err) => {
    logger.error("❌ Error connecting to MySQL:", err.message);
  });

// Mount Routes
app.use("/api", routes);
app.use("/api", healthCheckRoute); // /api/health

module.exports = app;
