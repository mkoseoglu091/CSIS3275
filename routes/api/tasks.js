// handles creating, completing, deleting, tasks for students to finish

const express = require('express');
const router = express.Router();

// @route   GET api/tasks
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Tasks Route'));

module.exports = router;