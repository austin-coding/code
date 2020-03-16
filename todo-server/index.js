const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const filePath = '/tmp/todo'
const app = express()
const port = 3000
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'something',
    database: 'todo'
});

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hi I am here!')
});

app.get('/users', (req, res) => {

    connection.connect(function (err) {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });

    let sql = "select * from users"

    connection.query(sql, function (err, result) {
        if (err) throw err;
        res.json(result)
    });




});

app.get('/time', (req, res) => {
    res.send("current time")
})




app.post('/create-todo', (req, res) => {
    var todoItem = req.body.item

    console.log('Adding item: ' + todoItem)

    if (fs.existsSync()) {

    }

})



app.post('/login', (req, res) => {

    const username = req.body.username
    const password = req.body.password
    const sql = 'select id,name from users where username="' + username + '" and password="' + password + '"'


    connection.connect(function (err) {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });

    connection.query(sql, function (err, result) {
        if (err) {
            throw err
        }

        if (result && result.length > 0) {

            res.json({
                "user": result[0]
            })
        } else {
            res.json({
                "user": null
            })
        }

    });



})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)

})