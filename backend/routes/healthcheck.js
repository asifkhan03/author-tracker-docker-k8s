const express = require("express");
const router = express.Router();
const db = require("../configs/db");

router.get("/health", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      return res.status(500).json({ status: "ERROR", message: err.message });
    }

    connection.ping((pingErr) => {
      connection.release(); // always release connection

      if (pingErr) {
        return res.status(500).json({ status: "ERROR", message: pingErr.message });
      }

      return res.status(200).json({ status: "OK", message: "MySQL connected" });
    });
  });
});

module.exports = router;
