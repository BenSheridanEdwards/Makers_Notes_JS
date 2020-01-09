describe('View Notes List', () => {
  describe('.toHTML', () => {
    it('Converts each note in the note list to html strings', () => {
      var noteList = new NoteList()
      noteList.createNote('Favourite Food: Chicken Katsu Curry')
      noteList.createNote('Favourite Drink: Chocolate Milkshake')
      var noteListView = new NoteListView(noteList)

      var expectedOutput = "<ul><li><div id='0'><a href='#note/0'>Favourite Food: Chic</a></div></li> <li><div id='1'><a href='#note/1'>Favourite Drink: Cho</a></div></li></ul>"
      expect(noteListView.toHTML()).toEq(expectedOutput)
    })
  })
})
