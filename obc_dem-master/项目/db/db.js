const host = 'localhost'
const user = 'root'
const password = '123456'
const database = 'weiduowei'
const mysql = require('mysql')

// function db(callback) {
const db = mysql.createPool({
    host,
    user,
    password,
    database
})
db.getConnection((err, data) => {
        if (err) return console.log('错误' + err)
        console.log('数库链接成功')
    })
    // }
module.exports = {
    db
}