// //server/routes/api/index.js v1.0

// import dependencies
const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;

