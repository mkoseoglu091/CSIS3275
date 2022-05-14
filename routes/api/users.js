// handles registering users, addings users etc.

const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator'); // required for validation during registery

// @route   GET api/users
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('User Route'));

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post('/', [ // this list of checks come from express-validator imported on line 5
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // if there are errors
        return res.status(400).json({ errors: errors.array() }); // 400 - bad request
    }
    res.send('Register User');
});

module.exports = router;