#!/usr/bin/env node
var program = require('commander')
var fs = require('fs')
console.log(__dirname);
console.log(process.cwd());
console.log(1111);

program.version('v1.0.0')
// 创建项目
program
    .command('create <appName>')
    .description('create project ')
    .action(function (appName, cmd) {
        require('../create')(appName, cmd)
    })
// 开启dev服务
program
    .command('start')
    .description('创建dev服务')
    .option('-p, --port <port>', 'Port used by the server (default: 3000)')
    .action(function (cmd) {
        require('../serve')(cmd)
    })
// build构建
program
    .command('build')
    .description('构建')
    .action(function (cmd) {
        require('../build')(cmd)
    })
program.parse(process.argv);



