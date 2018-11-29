'use strict'

const config = require('../config.js')
const store = require('../store.js')

// store.game.index = $(event.target).data('id')

// const createDialog = () => {
//   return $.ajax({
//     url: config.apiUrl + '/create-dialog',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

const createDialog = data => {
  return $.ajax({
    url: config.apiUrl + '/dialogs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  createDialog
}
