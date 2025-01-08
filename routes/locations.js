const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        const [results] = await sequelize.query('SELECT * FROM locations');
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch locations' });
    }
});

module.exports = router;
