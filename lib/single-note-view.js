'use strict'

function SingleNoteView(note) {
  this.note = note;
}

SingleNoteView.prototype = (function() {

  function noteHTML() {
    return this.note.content()
  }

  return {
    noteHTML: noteHTML
  };
})();