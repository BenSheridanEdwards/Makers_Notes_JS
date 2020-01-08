// document.getElementById("app").innerHTML = "Howdy"

function ChangeHTML(noteList) {
  this.noteList = noteList
}

ChangeHTML.prototype = (function() {

  function insertNoteList() {
   this.noteList.add('Favourite Drink: seltzer')
   var noteListView = new NoteListView(this.noteList)
   document.getElementById("app").innerHTML = noteListView.toHTML()
  }

  return {
    insertNoteList
  };
})();

var noteList = new NoteList()
var changeHTML = new ChangeHTML(noteList)
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