'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// npm
const gulp = require('gulp')
const del = require('del')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
const clean = () => del(['out/**/*'])

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = clean
gulp.task('clean', clean)
