'use strict'

function NoteListView (noteList) {
  this.noteList = noteList
}

NoteListView.prototype = (function () {
  function toHTML () {
    var array = this.noteList.all().map((note) => note.content().substring(0,20))
    var linkedArray = array.map((note, index) => '<li><div id=' + `'${index}'` + '>' + '<a href=' + `'#note/${index}'>${note}` + '</a>' + '</div></li>' )
    return '<ul>' + linkedArray.join(" ") + '</ul>'
  }

  return {
    toHTML: toHTML
  }
})()
