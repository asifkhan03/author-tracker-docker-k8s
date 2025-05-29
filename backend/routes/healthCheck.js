const express = require("express");
const router = express.Router();
const db = require("../configs/db"); // Import the pool

router.get("/health", async (req, res) => {
  try {
    const connection = await db.getConnection();  // Get connection from pool
    await connection.ping();
    connection.release();  // Release back to pool
    res.status(200).json({ status: "OK", message: "MySQL connected" });
  } catch (err) {
    res.status(500).json({ status: "ERROR", message: err.message });
  }
});

module.exports = router;
