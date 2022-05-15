// handles registering users, addings users etc.

const express = require('express');
const router = express.Router();
const gravatar = require('gravatar'); // fetches google account avatar
const bcrypt = require('bcryptjs'); // for hashing the password for extra protection
const {check, validationResult} = require('express-validator'); // required for validation during registery

const User = require('../../models/User'); // get the user model for DB

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
    check('studentID', 'Please enter a valid student ID Number').isNumeric().isLength({ min: 9, max: 9}),
    check('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 })
], 
async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) { // if there are errors
        return res.status(400).json({ errors: errors.array() }); // 400 - bad request
    }

    const {name, email, studentID, password} = req.body;

    try {
        // See if user exists
        let userEmail = await User.findOne({ email });
        let userID = await User.findOne({ studentID });
        if (userEmail || userID) { // if a user is found with inputted email or studentID
            return res.status(400).json({ errors: [  { msg: 'User already exists' }] });
        }

        // Get users gravatar (based on email)
        const avatar = gravatar.url(email, {
            s: '200', // size
            r: 'pg', // rating: pg so no inappropriate images
            d: 'mm' // if no avatar found use default
        })

        // create an instance of a user
        let user = new User({
            name,
            email,
            studentID,
            avatar,
            password
        });

        // Encrypt Password
        const salt = await bcrypt.genSalt(10); // used to hash the password
        user.password = await bcrypt.hash(password, salt);

        // Save user to database
        await user.save();

        // Return jsonwebtoken (so once user registers they can also login automatically)

        res.send('User Registered');

    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

   
});

module.exports = router;