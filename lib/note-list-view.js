'use strict'

function NoteListView () {
 
}

NoteListView.prototype = (function () {
  function toHTML (noteList) {
    
    var array = noteList.all().map((note) => note.content().substring(0,20))
    var linkedArray = array.map((note, index) => '<li><div id=' + `'${index}'` + '>' + '<a href=' + `'#note/${index}'>${note}` + '</a>' + '</div></li>' )
    return '<ul>' + linkedArray.join(" ") + '</ul>'
  }

  return {
    toHTML
  }
})()
