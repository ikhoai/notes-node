console.log('Starting Note.js');
const fs = require('fs');

var fetchNotes = () => {
  try {

var noteString = fs.readFileSync('notes-list.json');
    var notes = JSON.parse(noteString);
    return notes;  
  }
    catch (e) {
    };
  };

var saveNote = (notes) => {
      fs.writeFileSync('notes-list.json', JSON.stringify(notes));
  };

var addNote = (title, note) => {
    console.log(`You have just added note ${note}, with the title ${title}`);
    var notes = fetchNotes();
    var note = {
      title: title,
      note: note
    };

    fetchNotes();
    var dublicatedNote = notes.filter((note) => {
      return note.title === title;
    });

    if (dublicatedNote.length === 0) {
        notes.push(note);
        saveNote(notes);
    }
         };

var removeNote = (title) => {
    console.log(`You have just removed note ${title}`);
};

var listNote = () => {
  console.log(`List all you notes here!`);

var noteString = fs.readFileSync('notes-list.json');
var notes = JSON.parse(noteString);
console.log(notes);

};

var editNote = (note) => {
  console.log(`You are currently editing note ${note}`);
};

module.exports = {
  addNote: addNote,
  deleteNote: removeNote,
  listNote: listNote,
  editNote: editNote
}
