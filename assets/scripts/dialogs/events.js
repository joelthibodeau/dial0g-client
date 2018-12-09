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
  // console.log('delete dialog')
  console.log(data)
  // take this data and send it to our server
  // using an HTTP request (POST)
  console.log('onDeleteDialog ran.')
  api.deleteDialog(data)
    .then(ui.deleteDialogSuccess) // if your request was succesful
    .catch(ui.deleteDialogFailure) // if your request failed
}

const onGetDialogs = event => {
  event.preventDefault()
  // console.log('onGetStats ran.')
  api.getAllDialogs()
    .then((result) => {
      document.getElementById('dialogs-info').innerHTML = ''
      // console.log(result)
      // code inspired by tic tac toe
      // 1. create new div
      // 2. add id to newly created div
      // 3. add class to newly created div
      // 4. make newly created div the child of #dialogs-info div
      // 5. add dialogs result to the newly created div for specific game
      for (let i = 0; i < result.dialogs.length; i++) {
        const elementDialogEntry = document.createElement('div') // 1.
        elementDialogEntry.setAttribute('id', 'dialog-entry-' + i) // 2.
        // elementDialogEntry.setAttribute('class', 'dialog-entry-element') // 3.
        document.getElementById('dialogs-info').appendChild(elementDialogEntry) // 4.
        // removed result.dialogs[i].notes from concatenation
        document.getElementById('dialog-entry-' + i).innerHTML = 'dial0g ID: ' + result.dialogs[i].id + ' .' + '.' + '. ' + result.dialogs[i].date + ' .' + '.' + '. ' + result.dialogs[i].entry_name + ' .' + '.' + '. ' + '  rating:  ' + result.dialogs[i].rating// 5.
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
const addDialogHandlers = () => {
  $('#create-dialog').on('submit', onCreateDialog)
  $('#update-dialog').on('submit', onUpdateDialog)
  $('#delete-dialog').on('submit', onDeleteDialog)
  $('#entries-button').on('click', onGetDialogs)
}

// NEED TO CREATE NEW FUNCTION FOR CREATING NEW AUTH HANDLERS

module.exports = {
  addDialogHandlers
}
