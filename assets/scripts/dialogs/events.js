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

const addDialogHandlers = () => {
  $('#create-dialog').on('submit', onCreateDialog)
}

// NEED TO CREATE NEW FUNCTION FOR CREATING NEW AUTH HANDLERS

module.exports = {
  addDialogHandlers
}
