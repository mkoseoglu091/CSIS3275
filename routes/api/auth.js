// authentication

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); // to make use of auth middleware, just add it before (req, res) ex: '/' , auth, (req, res) =>...
const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // the middleware changed req.user.id to decoded id
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;