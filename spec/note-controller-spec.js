describe('Note Controller', () => {
  it('Instantates with a note list object', () => {
    var noteList = new NoteList()
    var changeHTML = new ChangeHTML(noteList)
    expect(changeHTML.noteList).isInstanceOf(NoteList)
  })

  it('Instantates with a empty note list object', () => {
    var noteList = new NoteList()
    var changeHTML = new ChangeHTML(noteList)
    list = changeHTML.noteList.list
    expect(list).toBeEmpty(list)
  })
  
  describe('.insertNoteList', () => {
    it('Inserts our note list into the app index.html file', () => {
      var noteList = new NoteList()
      noteList.createNote('Favourite Drink: seltzer')
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.insertNoteList();
      var expectedOutput = '<ul><li><div id="0"><a href="#note/0">Favourite Drink: sel</a></div></li>'
      expect(document.getElementById("app").innerHTML).includes(expectedOutput)
    })
    it('gives each note object a unique ID', () => {
      var noteList = new NoteList()
      noteList.createNote('Favourite Drink: seltzer')
      noteList.createNote('Favourite Drink: fanta')
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.insertNoteList();
      appObject = document.getElementById("app").innerHTML
      expect(appObject).includes("Favourite Drink: sel")
      expect(appObject).includes('<div id="0">')
    })
    it("gives each note an ID equal to it's note array index", () => {
      var noteList = new NoteList()
      var note = new Note('Favourite Drink: seltzer')
      var note2 = new Note('Favourite Drink: fanta')
      noteList.addNote(note)
      noteList.addNote(note2)
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.insertNoteList();
      expect(noteList.list[0].content()).toEq("Favourite Drink: seltzer")
      expect(noteList.list[0].content()).includes(document.getElementById("0").innerText)
      expect(noteList.list[1].content()).toEq("Favourite Drink: fanta")
      expect(noteList.list[1].content()).includes(document.getElementById("1").innerText)
    })
    it("gives each note a unique URL that matches it's ID", () => {
      var noteList = new NoteList()
      var note = new Note('Favourite Drink: seltzer')
      var note2 = new Note('Favourite Drink: fanta')
      noteList.addNote(note)
      noteList.addNote(note2)
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.insertNoteList();
      expect(document.getElementById("0").innerHTML).includes('<a href="#note/0">')
      expect(document.getElementById("1").innerHTML).includes('<a href="#note/1">')
    })
  })
 
  // describe('.listenForUrlChange', () => {
  //   it('listens for a url change event', () => {
    
  //   })

  //   it('calls the changeAppContent function', () => {
      
  //   })
  // })

  // describe('.listenForSubmitEvent', () => {
  //   it('listens for a form submit event', () =>{

  //   })
  //   it('calls the createNoteFromFormEvent function', () => {
    
  //   })
  // })

  describe('.createNoteFromFormEvent', () => {
    it('creates a new note with the text from the submit event', () => {
      var noteList = new NoteList()
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.createNoteFromFormEvent('This is my event note')
      expect(changeHTML.noteList.list[0]).isInstanceOf(Note)
    })
    it('refreshes the noteList, displaying the new note', () => {
      var noteList = new NoteList()
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.createNoteFromFormEvent('This is my event note')
      expect(document.getElementById("app").innerHTML).includes('This is my')
    })
  })
  describe('.changeAppContent', () => {
    it('loads full note content based on the URL', () => {
      var noteList = new NoteList()
      noteList.createNote('Favourite Drink: seltzer')
      noteList.createNote('Favourite Drink: yellow')
      var changeHTML = new ChangeHTML(noteList)
      changeHTML.insertNoteList();
      changeHTML.changeAppContent('http://127.0.0.1:5500/spec.html#note/0');
      expect(document.getElementById("full-note").innerText).includes("Favourite Drink: sel")
    })
  })
})

