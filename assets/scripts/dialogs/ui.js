'use strict'

// const store = require('../store.js')

const emptyMessage = () => {
  setTimeout(function () {
    $('.message').text('')
  }, 3000)
}

const createDialogSuccess = data => {
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

// const deleteDialogSuccess = function (response, dialogId) {
//   // clear the results div, in case it had stuff in it
//   $('.message').html('')
//   // print results to index.html
//   console.log(response)
//   $('.message').append(`Dialog ${dialogId} was deleted successfully`)

module.exports = {
  createDialogSuccess,
  createDialogFailure,
  updateDialogSuccess,
  updateDialogFailure
  // deleteDialogSuccess
}
