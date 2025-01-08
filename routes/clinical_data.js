const express = require('express');
const router = express.Router();
const sequelize = require('../config/connection');

// Fetch all clinical data
router.get('/', async (req, res) => {
    try {
        const [results] = await sequelize.query('SELECT * FROM clinical_data');
        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch clinical data' });
    }
});

// Fetch clinical data by territory ID
router.get('/:territoryId', async (req, res) => {
    try {
        const { territoryId } = req.params;
        const [rows] = await sequelize.query(
            'SELECT * FROM clinical_data WHERE territory_id = ?',
            { replacements: [territoryId] }
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch clinical data for territory' });
    }
});

module.exports = router;
