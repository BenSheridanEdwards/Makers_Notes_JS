describe('Note List', () => {
  describe('.all', () => {
    it('Shows all the notes', () => {
      var noteList = new NoteList()
      noteList.createNote("This is my first note")
      expect(noteList.all()[0]).isInstanceOf(Note)
    })
  })
  describe('.createNote', () => {
    it("creates a note object", () => {
      var noteList = new NoteList()
      noteList.createNote("This is my first note")
      note = noteList.list[0]
      expect(note).isInstanceOf(Note)
      expect(note.content()).toEq("This is my first note")
    })
    it("adds it to the note list", () => {
      var noteList = new NoteList()
      noteList.createNote("This is my first note")
      expect(noteList.list[0]).isInstanceOf(Note)
      expect(noteList.list[0].content()).toEq("This is my first note")
    })
  })
  describe('.addNote', () => {
    it('adds a note object to the note list', () => {
      var noteList = new NoteList()
      var note = new Note("This is a new note")
      noteList.addNote(note)
      expect(noteList.all()).includes(note)
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