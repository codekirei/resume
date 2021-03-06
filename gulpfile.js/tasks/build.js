'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const gulp = require('gulp')
const render = require('mithril-node-render')

// local
const yaml = require('./yaml')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const build = () => {
  yaml().then(res => console.log(res))
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = build
gulp.task('build', build)
