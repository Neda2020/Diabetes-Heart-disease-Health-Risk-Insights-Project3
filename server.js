const express = require('express');
const cors = require('cors');
const sequelize = require('./config/connection');
require('dotenv').config();

const app = express();

// Middleware
// Allow cross-origin requests
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// Test Database Connection
sequelize
    .authenticate()
    .then(() => console.log('Database connected!'))
    .catch((err) => {
        console.error('Database connection failed:', err);
        // Exit the process if DB connection fails
        process.exit(1); 
    });

// Routes
const locationRoutes = require('./routes/locations');
const clinicalDataRoutes = require('./routes/clinical_data');

// Add route handlers
app.use('/api/locations', locationRoutes);
app.use('/api/clinical_data', clinicalDataRoutes);

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
