// Server connection
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Define the path for the server for the API routes
router.use('/api', apiRoutes);

// Define the path for the home page
router.use('/', homeRoutes);

// Define the path for the dashboard
router.use('/dashboard', dashboardRoutes);

// Define a catch-all route for any resource that doesn't exist
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;