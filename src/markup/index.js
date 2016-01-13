'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const m = require('mithril')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const map = ar => ob => ar.map(el => el(ob))

const html = data =>
  m('html'
    , map(
      [ head
      , body
      ]
    )(data))

const head = data =>
  m('head')

const body = data =>
  m('body'
    , { class: 'body' }
    , [ div(data) ])

const div = data => m('div', data.name)

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = html
