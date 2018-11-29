'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
// const addNestedValue = require('../../../lib/add-nested-value.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateDialog = event => {
  event.preventDefault()
  console.log('onCreateDialog ran.')
  api.createDialog()
    .then(ui.createDialogSuccess)
    .catch(ui.createDialogFailure)
}

const addDialogHandlers = () => {
  $('#create-dialog').on('submit', onCreateDialog)
}

// NEED TO CREATE NEW FUNCTION FOR CREATING NEW AUTH HANDLERS

module.exports = {
  addDialogHandlers
}
