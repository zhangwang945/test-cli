const { execSync } = require('child_process')
const inquirer = require('inquirer');
const download = require('download-git-repo')
const chalk = require('chalk');
const { hasYarn } = require('./tool')
module.exports = async function create(appName, cmd) {
    // 支持模板配置
    const { template } = await inquirer.prompt([
        {
            name: 'template',
            type: 'list',
            message: '请选择模板',
            choices: ["Choice A", "choice B"]
        }
    ])
    // 下载模板
    download('github:zhangwang945/imageLibs', `${appName}`, function (err) {
        if (err) {
            console.log(chalk.redBright('模板下载失败'));
            return
        }
        execSync(`cd ${appName} && ${hasYarn ? 'yarn' : 'npm install --loglevel error'}`)
        console.log(chalk.white(`项目初始化完成`));

    })
}