'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
// const addNestedValue = require('../../../lib/add-nested-value.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateDialog = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onCreateDialog ran.')
  api.createDialog(data)
    .then(ui.createDialogSuccess)
    .catch(ui.createDialogFailure)
}

const onUpdateDialog = event => {
  console.log('got into update-dialog...about to prevent default')
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log('onUpdateDialog ran.')
  console.log('my dialog id is ', data.dialog.id)
  console.log('my dialog id title ', data.dialog.date)
  console.log('my dialog id entry_name ', data.dialog.entry_name)
  console.log('my dialog id rating ', data.dialog.rating)
  console.log('my dialog id notes ', data.dialog.notes)
  api.updateDialog(data)
    .then(function (response) {
      ui.updateDialogSuccess(response)
    })
    .catch(ui.updateDialogFailure)
}

const onDeleteDialog = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const data = $('#delete-input').val()
  // console.log('delete scheme')
  console.log(data)
  // take this data and send it to our server
  // using an HTTP request (POST)
  console.log('onDeleteDialog ran.')
  api.deleteDialog(data)
    .then(ui.deleteDialogSuccess) // if your request was succesful
    .catch(ui.deleteDialogFailure) // if your request failed
}
// const onDeleteDialog = function (event) {
//   console.log('got into onDeleteDialog...about to prevent default')
//   event.preventDefault()
//
//   const input = getFormFields(event.target) // input = { book: { id: 100 } }
//   console.log('my dialog id is ', input.dialog.id)
//
//   api.deleteDialog(input.dialog.id)
//     .then(function (response) {
//       ui.deleteDialogSuccess(response, input.dialog.id)
//     })
//     // .then(ui.handleDeleteSuccessResponse)
//     .catch(ui.deleteDialogFailure)
// }

const addDialogHandlers = () => {
  $('#create-dialog').on('submit', onCreateDialog)
  $('#update-dialog').on('submit', onUpdateDialog)
  $('#delete-dialog').on('submit', onDeleteDialog)
}

// NEED TO CREATE NEW FUNCTION FOR CREATING NEW AUTH HANDLERS

module.exports = {
  addDialogHandlers
}
