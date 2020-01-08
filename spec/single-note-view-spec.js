describe('Single Note View', () => {
  describe('.noteHTML', () => {
    it('returns a note as HTML', () => {
      var note = new Note("Favourite drink: seltzer")
      var singleNoteView = new SingleNoteView(note)
      expectedOutput = "<div>Favourite drink: seltzer</div>"
      expect(singleNoteView.noteHTML()).toEq(expectedOutput)
    })
  })
})