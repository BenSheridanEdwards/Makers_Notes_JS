describe('Note Controller', () => {
  it('Instantates with a note list object', () => {
    var noteList = new NoteList()
    var changeHTML = new ChangeHTML(noteList)
    expect(changeHTML.noteList).isInstanceOf(NoteList)
  })

  describe('.insertNoteList', () => {
    it('Inserts our note list into the app index.html file', () => {
      var noteList = new NoteList()
      noteList.createNote('Favourite Drink: seltzer')
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.insertNoteList();
      var expectedOutput = '<ul><li><div>Favourite Drink: sel</div></li></ul>'
      expect(document.getElementById("app").innerHTML).includes(expectedOutput)
    })
  })
})