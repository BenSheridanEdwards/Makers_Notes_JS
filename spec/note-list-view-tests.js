describe('View Notes List', () => {
  describe('.toHTML', () => {
    it('Converts and outputs notes to html strings', () => {
      var noteList = new NoteList()
      noteList.add('Favourite Food: Chicken Katsu Curry')
      noteList.add('Favourite Drink: Chocolate Milkshake')
      var noteListView = new NoteListView(noteList)

      var expectedOutput = '<ul><li><div>Favourite Food: Chicken Katsu Curry</div></li><li><div>Favourite Drink: Chocolate Milkshake</div></li></ul>'
      expect(noteListView.toHTML()).toEq(expectedOutput)
    })
  })
})
