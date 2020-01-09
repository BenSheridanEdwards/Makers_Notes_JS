function ChangeHTML(noteList) {
  this.noteList = noteList
}

ChangeHTML.prototype = (function() {

  function insertNoteList() {
   var noteListView = new NoteListView(this.noteList)
   document.getElementById("app").innerHTML = noteListView.toHTML()
  }

  function listenForUrlChange() {
    window.addEventListener("hashchange", changeAppContent);
  }

  function changeAppContent() {
   note = this.noteList.list[window.location.hash.split('#note/')[1]]
   var singleNoteView = new SingleNoteView(note)
   document.getElementById("full-note").innerHTML = singleNoteView.noteHTML()
  }

  return {
    insertNoteList,
    listenForUrlChange,
    changeAppContent
  };
})();

var noteList = new NoteList()
noteList.createNote('Favourite Drink: seltzer')
noteList.createNote('Favourite Drink: yellow')
var changeHTML = new ChangeHTML(noteList)
changeHTML.insertNoteList();
changeHTML.listenForUrlChange();

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