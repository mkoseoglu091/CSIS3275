// handles creating, completing, deleting, tasks for students to finish

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth'); // any request with auth as 2nd param will be private
const Tasks = require('../../models/Tasks');
const User = require('../../models/User');

// @route   GET api/tasks/me
// @desc    Get current users tasks
// @access  Private
router.get('/me', auth, async (req, res) => {
    try {
        const tasks = await Tasks.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']); // find the profile of the user who's token is provided
        
        // if there is no profile
        if(!tasks) {
            return res.status(400).json({ msg: 'There is no tasks for this user' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// Start Orientation

module.exports = router;