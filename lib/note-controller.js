function ChangeHTML(noteList) {
  this.noteList = noteList
}

ChangeHTML.prototype = (function() {

  function insertNoteList() {
   var noteListView = new NoteListView(this.noteList)
   document.getElementById("app").innerHTML = noteListView.toHTML()
  }

  function listenForUrlChange() {
    window.addEventListener("hashchange", changeAppContent(window.location));
  }

  function listenForSubmitEvent() {
    document.getElementById('text').addEventListener("submit", function(event){
      event.preventDefault();
      createNoteFromFormEvent(event.srcElement.elements[0].value)
    });
  }

  function createNoteFromFormEvent(text) {
    this.noteList.createNote(text)
    var noteListView = new NoteListView(this.noteList)
    document.getElementById("app").innerHTML = noteListView.toHTML()
  }

  function changeAppContent(location1) {
    index = location1.split('#note/')[1]
    note = this.noteList.list[index] // document.location.href.split('#note/')[1]
    var singleNoteView = new SingleNoteView(note)
    document.getElementById("full-note").innerHTML = singleNoteView.noteHTML()
  }

  return {
    insertNoteList,
    listenForUrlChange,
    changeAppContent,
    listenForSubmitEvent,
    createNoteFromFormEvent
  };
})();

var noteList = new NoteList()
var changeHTML = new ChangeHTML(noteList)
changeHTML.insertNoteList();
changeHTML.listenForUrlChange();
changeHTML.listenForSubmitEvent();

// function ChangeHTML() {

// }

// ChangeHTML.prototype = (function() {

//   function changeAppGreeting() {
//   console.log(document.getElementById("app"))
//   document.getElementById("app").innerHTML = "Howdy"
//   }

//   return {
//     changeAppGreeting
//   };
// })();

// var ChangeHTML = new ChangeHTML
// ChangeHTML.changeAppGreeting();