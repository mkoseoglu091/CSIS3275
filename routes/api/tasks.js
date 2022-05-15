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
        const tasks = await Tasks.findOne({ user: req.user.id }).populate('user', ['name', 'avatar']); // find the user of the user who's token is provided
        
        // if there is no such table
        if(!tasks) {
            return res.status(400).json({ msg: 'There is no tasks for this user' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route   POST api/tasks
// @desc    Create a tasks table for the user when the user starts orientation
// @access  Private
router.post('/', auth, async (req, res) => {
    // Build Tasks
    const taskTable = {};
    taskTable.user = req.user.id; // set the user to be the same user as the owner of the token

    // Make sure a task table hasn't already been created for the user
    try {
        let table = await Tasks.findOne({ user: req.user.id });
        if(table) { // there is already a table for this user
            return res.status(400).json({ errors: [{ msg: 'Task table already exists' }] });
        }

        // Add categories and Tasks to the table and save it to DB
        // json is ready at ../../tasks/tasks.json, taskTable.category needs to be filled with the json. Research how.

        // Save tasks table and return it as the response
        table = new Tasks(taskTable);
        await Tasks.bulkSave();
        res.json(table);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// Update
// this will be only available to admins, 
// admins can search for a student ID, and update tasks once they are completed

module.exports = router;