const router = require('express').Router();
const path = require('path');
//const fs = require('fs';)
//const htmlRoutes = require('../htmlRoutes')

// router.use('/', (req, res) => {
//     console.log('index use')
// });



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});
router.use('/notes', (req, res) => {
    console.log('notes html use')
});
module.exports = router;

