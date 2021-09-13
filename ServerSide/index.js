const mysql = require('mysql');
const express = require('express');
const cors = require('cors')
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(cors());
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'jrek0Pbg$',
    database: 'usersrecordsdb',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(5000, () => console.log('Express server is run at port no : 5000'));


//Get all users
app.get('/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM user', (err, rows, fields) => {
        //console.log(rows)
        //console.log(fields)
        if (!err)
            res.send(rows);
        else
        res.send("some error.."+err)
    })
});

//Get an users
app.get('/user/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
        res.send("some error.."+err)
    })
});

//Delete an users
app.delete('/user/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM user WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
        res.send("some error.."+err)
    })
});

//Insert an users
app.post('/user', (req, res) => {
    console.log(req.body);
    mysqlConnection.query(`insert into user (name, email)  value ("${req.body.name}","${req.body.email}");`,  (err, rows, fields) => {
        if (!err)
                res.send('Inserted user id :'+req.body.id);
            
        else
        res.send("some error.."+err)
    })
});

//Update an users
app.put('/user/:id', (req, res) => {
    var sql =`update user set name="${req.body.name}", email="${req.body.email}" where id=${req.params.id}`;
    mysqlConnection.query(sql, (err, rows, fields) => {
        if (!err)
        res.send('Updated successfully');
        else
        res.send("some error.."+err)
    })
});