describe('Note', () => {
  it('Creates a note with text', () => {
    var firstNote = new Note('My first note')
    expect(firstNote.content()).toEq('My first note')
  })
})
