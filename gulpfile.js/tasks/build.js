'use strict'

//----------------------------------------------------------
// modules
//----------------------------------------------------------
// node
const fs = require('fs')

// npm
const gulp = require('gulp')
const yaml = require('js-yaml')
const P = require('bluebird')

//----------------------------------------------------------
// logic
//----------------------------------------------------------
// promise to read path
const read = path => P.promisify(fs.readFile)(path, 'utf8')

const readYaml = () => {
  read('src/data.yml')
    .then(res => yaml.safeLoad(res))
    .then(res => console.log(res))
}

//----------------------------------------------------------
// exports
//----------------------------------------------------------
module.exports = readYaml
gulp.task('yaml', readYaml)
