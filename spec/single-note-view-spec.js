describe('Single Note View', () => {
  describe('.noteHTML', () => {
    it('returns a note as HTML without tags', () => {
      var note = new Note("Favourite drink: seltzer")
      var singleNoteView = new SingleNoteView(note)
      expectedOutput = "Favourite drink: seltzer"
      expect(singleNoteView.noteHTML()).toEq(expectedOutput)
    })
  })
})