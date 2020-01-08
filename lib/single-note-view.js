'use strict'

function SingleNoteView(note) {
  this.note = note;
}

SingleNoteView.prototype = (function() {

  function noteHTML() {
    return "<div>" + this.note.content() + "</div>"
  }

  return {
    noteHTML: noteHTML
  };
})();