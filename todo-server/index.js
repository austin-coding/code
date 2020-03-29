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
app.get('/dog', (req, res) => {
    res.send('Hi dog is here!')
});

app.get('/users', (req, res) => {

    connection.connect((err) => {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });

    let sql = "select * from users"

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    });

});
app.get('/tasks', (req, res) => {

    connection.connect((err) => {
        if (err) {
            return console.error('error: ' + err.message);
        }

        console.log('Connected to the MySQL server.');
    });

    let sql = "select * from tasks"

    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    });
});

app.get('/time', (req, res) => {
    // new Date object
    let date_ob = new Date();
    let my_time = date_ob.toTimeString()
    
    let another_date = new Date();
    let another_time = another_date.getHours() + '---' + another_date.getMinutes() + '---' +another_date.getSeconds()
    
    res.json({
        "my_time" : my_time,
        "another_time": another_time
    })

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
    
    const sql = 'select * from users where username="' + username + '" and password="' + password + '"'

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

        // a user was found
        if (result.length > 0) {
            res.json({
                "user": result[0],
                "sql": sql
            })
            // a user was not found
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