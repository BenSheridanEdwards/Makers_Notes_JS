describe('View Notes List', () => {
  describe('.toHTML', () => {
    it('Converts each note in the note list to html strings', () => {
      var noteListTest = new NoteList()
      noteListTest.createNote('Favourite Food: Chicken Katsu Curry')
      noteListTest.createNote('Favourite Drink: Chocolate Milkshake')
      var noteListView = new NoteListView()
      var expectedOutput = "<ul><li><div id='0'><a href='#note/0'>Favourite Food: Chic</a></div></li> <li><div id='1'><a href='#note/1'>Favourite Drink: Cho</a></div></li></ul>"
      expect(noteListView.toHTML(noteListTest)).toEq(expectedOutput)
    })
  })
})
