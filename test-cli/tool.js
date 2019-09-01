const { execSync } = require('child_process')
const hasYarn = () => {
    try {
        execSync('yarn --version')
        return true
    } catch (err) {
        return false
    }
}
module.exports = {
    hasYarn,
}