
'use strict'

function NoteList() {
  this.list = []
};

NoteList.prototype = (function() {

  function all() {
    return this.list;
  }

  function add(text) {
    var note = new Note(text)
    this.list.push(note)
  }
  
  return {
    all: all,
    add: add
  };
})();

