const express = require('express')
    // const { db } = require('./db/db')
const { router } = require('./route/post')
const app = express()
const port = 3066

app.use(express.urlencoded({ extended: false }))
app.use(express.static('./static'))
app.use(router)

// db((data) => {
//     if (data) return console.log(data)
// })

// app.get('/', (req, res) => res.send('欢迎'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))