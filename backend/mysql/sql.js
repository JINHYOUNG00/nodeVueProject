const customerSql = require('./customerSql.js');
const boardSql = require('./boardSql.js')
module.exports = {
    ...customerSql,
    ...boardSql
}