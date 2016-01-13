'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// node
const fs = require('fs')

// npm
const gulp = require('gulp')
const parse = require('js-yaml').safeLoad
const P = require('bluebird')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
// promise to read path
const read = path => P.promisify(fs.readFile)(path, 'utf8')

// read and parse yaml
const yaml = () => read('src/data.yml').then(parse)

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = yaml
gulp.task('yaml', yaml)
