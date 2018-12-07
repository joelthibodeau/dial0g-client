'use strict'

// const store = require('../store.js')

const emptyMessage = () => {
  setTimeout(function () {
    $('.message').text('')
  }, 3000)
}

const createDialogSuccess = data => {
  // clears modal form fields.
  $('#create-dialog').trigger('reset')
  // close modal on create dialog success
  $('#newDialogModal').modal('hide')
  $('.message').text('created dial0g successfully')
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('createDialogSuccess ran. Data is:', data)
  emptyMessage()
}

const createDialogFailure = error => {
  $('.message').text('error on create dial0g')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('createDialogFailure ran. Error is :', error)
  emptyMessage()
}

const updateDialogSuccess = data => {
  $('#update-dialog').trigger('reset')
  // close modal on update dialog success
  $('#updateDialogModal').modal('hide')
  $('.message').text('updated dial0g successfully')
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('updateDialogSuccess ran. Data is:', data)
  emptyMessage()
}

const updateDialogFailure = error => {
  $('.message').text('error on update dial0g')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('updateDialogFailure ran. Error is :', error)
  emptyMessage()
}

const deleteDialogSuccess = data => {
  $('#delete-dialog').trigger('reset')
  // close modal on delete dialog success
  $('#deleteDialogModal').modal('hide')
  $('.message').text('delete dial0g successfully')
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('deleteDialogSuccess ran.')
  emptyMessage()
}

const deleteDialogFailure = error => {
  $('.message').text('error on delete dial0g')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('deleteDialogFailure ran. Error is :', error)
  emptyMessage()
}

module.exports = {
  createDialogSuccess,
  createDialogFailure,
  updateDialogSuccess,
  updateDialogFailure,
  deleteDialogSuccess,
  deleteDialogFailure
}
