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

var cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hi I am here!')
});

app.get('/dog', (req, res) => {
    res.send('Hi dog is here!')
});

app.post('/create-user', (req, res) => {
    var name = req.body.name 
    var username = req.body.username
    var password = req.body.password
    var sql = 'INSERT INTO todo.users (name, username, password) VALUES ("'+name+'", "'+username+'", "'+password+'")' 
    connection.connect((err) => {
        if (err) {
            return console.error('error: ' + err.message);
        } else {
            console.log('Connected to the MySQL server.');
        }

    });
    connection.query(sql, (err,result) => {
        if (err) {
            throw err
        }
        res.send(result)
    })
    

}) 

// Route definition
app.get('/tasks', (req, res) => {

    connection.connect((err) => {
        if (err) {
            return console.error('error: ' + err.message);
        } else {
            console.log('Connected to the MySQL server.');
        }

    });

    // define a variable called `sql` that will hold the SQL query
    let sql = "select * from tasks"
    console.log({ sql })
    // The connection variable is an object of type Connection. 
    // This connection object has methods, which allow you to connect to the DB
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
    let another_time = another_date.getHours() + '---' + another_date.getMinutes() + '---' + another_date.getSeconds()

    res.json({
        "my_time": my_time,
        "another_time": another_time
    })

})



// in the json structure create: item, user_id
// store the todoItem and userId in a variable
// create a sql INSERT query as we did in postman 
// make sure the GET /todos endpoint shows the newly created item you added
app.post('/create-todo', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*")
    var todoList = req.body.todo_list
    var userId = req.body.user_id
    var myName = req.body.my_name
    var sql = 'INSERT INTO `todo`.`tasks` (`todo_list`, `date_created`, `user_id`) VALUES ("'+todoList+'", NOW(), "'+userId+'");'
    connection.connect((err) => {
        if (err) {
            return console.log('error ' + err.message);
        }
        console.log('Connected to MySQL server ');
    
    });
    
    
    connection.query(sql, (err,result) => {
        if (err) {
            throw err
        }
        res.send(result)
    })

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