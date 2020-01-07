describe('Note', () => {
  it('Creates a note with text', () => {
    var newNote = new Note('My first note')
    expect(newNote.content()).toEq('My first note')
  })
})
