const router = require('express').Router();
const notes = require('../../db/db.json');
const { v4 : uuidv4 } = require('uuid');
const fs = require('fs');
//const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
    // res.json(`${req.method} request recieved to get notes`);
    // console.log(`${req.method} request recieved to get notes`);
    res.json(notes);
});


router.post('/notes', (req, res) => {
    console.log(notes);
    const { title, text } = req.body;
    const newNote = {
        title,
        text,
        id : uuidv4()
    };
    const oldNotes = notes;
    // const parsedNotes = JSON.parse(data);
    oldNotes.push(newNote);
    console.log(oldNotes);
    fs.writeFile('./db/db.json',
        JSON.stringify(oldNotes, null, 4),
        (writeErr) => 
            writeErr
                ? console.log(writeErr)
                : console.log('Successfully updated notes!')
    );

    // fs.readFile(notes, 'utf8', (err, data) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         const parsedNotes = JSON.parse(data);
    // //         parsedNotes.push(newNote);

    //         fs.writeFile(notes,
    //             JSON.stringify(parsedNotes, null, 4),
    //             (writeErr) => 
    //                 writeErr
    //                     ? console.log(witeErr)
    //                     : console.log('Successfully updated notes!')
    //         );
    //     }
    // });




    res.json(`${req.method} request recieved to add notes`);
    console.log(`${req.method} recieved to add notes`);
});

router.use('/notes', (req, res) => {
    console.log('api notes used')
});

module.exports = router;