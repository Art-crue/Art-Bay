const express = require('express');
const router = express.Router();

// /art routes
router.get('/art', (req, res) => {
  res.json({ message: 'Get all art items' });
});

module.exports = router;