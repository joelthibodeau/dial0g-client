'use strict'

const store = require('../store.js')

const emptyMessage = () => {
  setTimeout(function () {
    $('.message').text('')
  }, 3000)
}

const signUpSuccess = data => {
  $('.message').text('signed up successfully')
  $('.message').attr('class', 'message') // removes all classes except the default class of 'message'
  $('.message').addClass('success')
  console.log('signUpSucces ran. Data is:', data)
  emptyMessage()
}

const signUpFailure = error => {
  $('.message').text('error on sign up')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
  emptyMessage()
}

const signInSuccess = data => {
  console.log(data.user.token)
  store.user = data.user
  $('#signed-out').hide()
  $('#signed-in').show()
  $('#sign-in').find('input:text, input:password').val('')
  // $('#email').val('')
  // $('#password').val('')
  $('#sign-in').modal('hide')
  $('.message').text('signed in successfully')
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('signInSuccess ran. Data is:', data)
  emptyMessage()
}

const signInFailure = error => {
  $('.message').text('error on sign in')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
  emptyMessage()
}

const changePasswordSuccess = data => {
  console.log('changedPasswordSuccess ran. Data is:', data)
  // consol.log below was causing user facing error message, despite 204
  // console.log(data.user.token)
  $('.message').text('changed password successfully')
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  // console.log('changedPasswordSuccess ran. Data is:', data)
  emptyMessage()
}

const changePasswordFailure = error => {
  $('.message').text('error changing password')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('changedPasswordFailure ran. Error is :', error)
  emptyMessage()
}

const signOutSuccess = data => {
  $('#signed-in').hide()
  $('#signed-out').show()
  $('.message').text('signed out successfully')
  store.user = {} // or = null
  $('.message').attr('class', 'message')
  $('.message').addClass('success')
  console.log('signOutSuccess ran. Data is:', data)
  emptyMessage()
}

const signOutFailure = error => {
  $('.message').text('error on sign out')
  $('.message').attr('class', 'message')
  $('.message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
  emptyMessage()
}
//
// const createDialogSuccess = data => {
//   $('.message').text('created dial0g successfully')
//   store.user = {} // or = null
//   $('.message').attr('class', 'message')
//   $('.message').addClass('success')
//   console.log('createDialogSuccess ran. Data is:', data)
//   emptyMessage()
// }
//
// const createDialogFailure = error => {
//   $('.message').text('error on create dial0g')
//   $('.message').attr('class', 'message')
//   $('.message').addClass('failure')
//   console.error('createDialogFailure ran. Error is :', error)
//   emptyMessage()
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
  // createDialogSuccess,
  // createDialogFailure
}
