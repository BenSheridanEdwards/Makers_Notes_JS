describe('View Notes List', () => {
  describe('.toHTML', () => {
    it('Converts each note in the note list to html strings', () => {
      var noteList = new NoteList()
      noteList.createNote('Favourite Food: Chicken Katsu Curry')
      noteList.createNote('Favourite Drink: Chocolate Milkshake')
      var noteListView = new NoteListView(noteList)

      var expectedOutput = '<ul><li><div>Favourite Food: Chic</div></li><li><div>Favourite Drink: Cho</div></li></ul>'
      expect(noteListView.toHTML()).toEq(expectedOutput)
    })
  })
})
