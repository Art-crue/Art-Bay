const express = require('express');
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');

router.post('auth/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = users.find(u => u.username === username);
  
      if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey);
        res.json({ token });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;