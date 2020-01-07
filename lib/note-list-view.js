'use strict'

function NoteListView (noteList) {
  this.noteList = noteList
}

NoteListView.prototype = (function () {
  function toHTML () {
    var array = this.noteList.all().map((note) => note.content())
    return '<ul><li><div>' + array.join('</div></li><li><div>') + '</div></li></ul>'
  }

  return {
    toHTML: toHTML
  }
})()
