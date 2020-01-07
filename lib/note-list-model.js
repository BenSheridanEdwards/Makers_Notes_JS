'use strict'

function NoteList() {
  this.list = []
};

NoteList.prototype = (function() {

  function showAll() {
    return this.list;
  }

  function add(text) {
    var note = new Note(text)
    this.list.push(note)
  }
  
  return {
    showAll: showAll,
    add: add
  };
})();

