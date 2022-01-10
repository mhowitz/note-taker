const router = require('express').Router();
const notes = require('../../db/db.json');

//const uuid = require('../helpers/uuid');

router.get('/api/notes', (req, res) => {
    res.json(`${req.method} request recieved to get notes`);
    console.log(`${req.method} request recieved to get notes`);
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
    res.json(`${req.method} request recieved to add notes`);
    console.log(`${req.method} recieved to add notes`);
})

module.exports = router;