'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const dialogEvents = require('./dialogs/events.js')
// const gamePlayEvents = require('./game-play/events.js')
// const gamePlayApi = require('./game-play/api.js')
// const store = require('./store.js')

$(() => {
  // your JS code goes here
  authEvents.addAuthHandlers()
  dialogEvents.addDialogHandlers()

  $('body').on('hidden.bs.modal', '.modal', function () {
    $(this).find('input[type="text"], input[type="password"],textarea,select').each(function () {
      if (this.defaultValue !== '' || this.value !== this.defaultValue) {
        this.value = this.defaultValue
      } else { this.value = '' }
    })
  })
})
