'use strict'

function Note(text) {
  this.text = text;
}

Note.prototype = (function() {

  function content() {
    return this.text;
  }

  return {
    content
  };
})();