const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json({
    success: true,
    data: [{name: 'Ramesh'}, {name: 'Mahesh'}]
  });
});

module.exports = router; 