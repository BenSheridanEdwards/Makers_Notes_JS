describe('NoteList', () => {
  describe('.showAll', () => {
    it('Shows all the notes', () => {
      var noteList = new NoteList()
      noteList.add("This is my first note")
      expect(noteList.showAll()[0]).isInstanceOf(Note)
    })
  })
})










// (function() {
//   function testShowNoteList() {
//     var note = new Note("My favourite language is JavaScript");
//     var noteList = new NoteList();


//     if (noteList.all() === [note]) {
//       throw new Error("Failing Test: Create New Note");
//     } else {
//       console.log(".");
//     }
//   };
//   testShowNoteList()
// })(this);