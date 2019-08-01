#!/usr/bin/env node

var inquirer = require('inquirer');
var program = require('commander');
var Promise = require("bluebird");
var fs = Promise.promisifyAll(require('fs-extra'));
var chalk = require('chalk');
var figlet = require('figlet');
var ora = require('ora');
var exec = require('promise-exec');
var path = require('path');

var analyze = require('./analyze').analyze;

analyze(path.resolve('../fidea/src/router.js'));

console.log(
	chalk.green(
		figlet.textSync("NODE CLI")
	)
);