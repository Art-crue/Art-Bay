const express = require('express');
const router = express.Router();

// /user routes
router.get('/checkout', (req, res) => {
  res.json({ message: 'Get all users' });
});

module.exports = router;