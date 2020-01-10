describe('Note Controller', () => {

  it('Instantates with a note list object', () => {
    expect(changeHTML.noteList).isInstanceOf(NoteList)
  })

  it('Instantates with a empty note list object', () => {
      list = changeHTML.noteList.list
      expect(list).toBeEmpty(list)
  })

  describe('.insertNoteList', () => {
    it('Inserts our note list into the app index.html file', () => {
      noteList.createNote('Favourite Drink: White Monster')
      noteList.createNote('Favourite Drink: Coca-Cola')
      changeHTML.insertNoteList();
      var expectedOutput = '<ul><li><div id="0"><a href="#note/0">Favourite Drink: Whi</a></div></li>'
      expect(document.getElementById("app").innerHTML).includes(expectedOutput)
    })
    it('gives each note object a unique ID', () => {
      appObject = document.getElementById("app").innerHTML
      expect(appObject).includes("Favourite Drink: Whi")
      expect(appObject).includes('<div id="0">')
    })
    it("gives each note an ID equal to it's note array index", () => {
      expect(noteList.list[0].content()).toEq("Favourite Drink: White Monster")
      expect(noteList.list[0].content()).includes(document.getElementById("0").innerText)
      expect(noteList.list[1].content()).toEq("Favourite Drink: Coca-Cola")
      expect(noteList.list[1].content()).includes(document.getElementById("1").innerText)
    })
    it("gives each note a unique URL that matches it's ID", () => {
      expect(document.getElementById("0").innerHTML).includes('<a href="#note/0">')
      expect(document.getElementById("1").innerHTML).includes('<a href="#note/1">')
    })
  })
 
  describe('.createNoteFromFormEvent', () => {
    changeHTML.createNoteFromFormEvent('Event Note')

    it('creates a new note with the text from the submit event', () => {
      expect(changeHTML.noteList.list[0]).isInstanceOf(Note)
    })
    it('refreshes the noteList, displaying the new note', () => {
      expect(document.getElementById("app").innerHTML).includes('Event Note')
    })
  })
  describe('.changeAppContent', () => {
    it('loads full note content based on the URL', () => {
      changeHTML.changeAppContent()
      expect(document.getElementById("full-note").innerText).includes("Favourite Drink: White Monster")
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
})

