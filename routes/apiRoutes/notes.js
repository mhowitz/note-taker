const router = require('express').Router();
let notes = require('../../db/db.json');
const { v4 : uuidv4 } = require('uuid');
const fs = require('fs');
//const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {
    // res.json(`${req.method} request recieved to get notes`);
    // console.log(`${req.method} request recieved to get notes`);
    res.json(notes);
});


router.post('/notes', (req, res) => {
    // console.log(notes);
    const { title, text } = req.body;
    const newNote = {
        title,
        text,
        id : uuidv4()
    };
    const oldNotes = notes;
    // const parsedNotes = JSON.parse(data);
    oldNotes.push(newNote);
    //console.log(oldNotes);
    fs.writeFile('./db/db.json',
        JSON.stringify(oldNotes, null, 4),
        (writeErr) => 
            writeErr
                ? console.log(writeErr)
                : console.log('Successfully updated notes!')
    );
    res.json(`${req.method} request recieved to add notes`);
    console.log(`${req.method} recieved to add notes`);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    console.log(`${req.method} recieved to delete notes! id: ${id}`);
    //handleNoteDelete(id);
    notes = notes.filter(note => note.id != id);
    fs.writeFile('./db/db.json',
        JSON.stringify(notes, null, 4),
        (writeErr) => 
            writeErr
                ? console.log(writeErr)
                : console.log('Successfully updated filtered notes!')
    );

    res.json({
        message: 'deleted',
        // changes: id,
        data: id
    });
    
    //notes.splice(id, 1);
    // request.db.get('users').remove({'username': username}, function(error, document) {
    //     if (error) response.send(error);
    //     return response.send("deleted");
    //    });
    
    
    
})
router.use('/notes', (req, res) => {
    console.log('api notes used')
});

module.exports = router;