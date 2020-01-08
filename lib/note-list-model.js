
'use strict'

function NoteList() {
  this.list = []
};

NoteList.prototype = (function() {

  function all() {
    return this.list;
  }

  function createNote(text) {
    var note = new Note(text)
    this.list.push(note)
  }

  function addNote(note) {
    this.list.push(note)
  }
  
  return {
    all: all,
    createNote: createNote,
    addNote: addNote
  };
})();

