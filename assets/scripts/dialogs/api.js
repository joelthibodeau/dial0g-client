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

const updateDialog = data => {
  // get id out of data
  const id = data.dialog.id
  // delete id from data before sending it
  delete data.dialog.id

  return $.ajax({
    url: config.apiUrl + `/dialogs/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteDialog = data => {
  // get id out of data
  const id = data.dialog.id
  // delete id from data before sending it
  delete data.dialog.id
  return $.ajax({
    url: config.apiUrl + `/dialogs/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

// const deleteDialog = function (id) {
//   return $.ajax({
//     url: config.apiUrl + `/dialogs/${id}`,
//     method: 'DELETE'
//   })
// }

// const updateOneBookFromApi = function (bookObject) {
//   return $.ajax({
//     url: baseUrl + `/books/${bookObject.book.id}`,
//     method: 'PATCH',
//     data: bookObject
//   })
// }

module.exports = {
  createDialog,
  updateDialog,
  deleteDialog
}
