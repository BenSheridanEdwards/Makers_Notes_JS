function ChangeHTML(noteList) {
  this.noteList = noteList
  this.noteListView = new NoteListView()
}

ChangeHTML.prototype = (function() {

  function insertNoteList() {
    document.getElementById("app").innerHTML = this.noteListView.toHTML(this.noteList)
  }

  function listenForUrlChange() {
    window.addEventListener("hashchange", changeAppContent);
  }

  function listenForSubmitEvent() {
    document.getElementById('text').addEventListener("submit", function(event){
      event.preventDefault();
      createNoteFromFormEvent(event.srcElement.elements[0].value)
    });
  }

  function createNoteFromFormEvent(text) {
    this.noteList.createNote(text)
    var noteListView = new NoteListView()
    document.getElementById("app").innerHTML = noteListView.toHTML(this.noteList)
  }

  function changeAppContent() {
    index = document.location.href.split('#note/')[1]
    if (index == undefined) {
      console.log(index)
    } else {
      note = this.noteList.list[index]
      document.getElementById("full-note").innerHTML = note.content()
    }
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
changeHTML.listenForSubmitEvent();
changeHTML.listenForUrlChange();
changeHTML.insertNoteList();

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