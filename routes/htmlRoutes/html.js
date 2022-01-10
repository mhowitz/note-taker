const router = require('express').Router();
const path = require('path');
//const fs = require('fs';)
//const htmlRoutes = require('../htmlRoutes')



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
router.use('/');
router.use('/notes');
module.exports = router;

