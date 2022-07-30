// Operations related to the pet such as browsing options, and changing options to modify look of pet
// commands to feed the pet and play with it can be here too

const express = require('express');
const router = express.Router();

// @route   GET api/pet
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Pet Route'));

// TODO: get current pet clothes and available options


// TODO: modify current shirt/pants


module.exports = router;