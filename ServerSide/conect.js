const mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'jrek0Pbg$',
    database : 'usersrecordsdb'
});

mysqlConnection.connect((err)=>{
    if(err)
    console.log('DB connection succeded.');
    else
    console.log('DB connection failed \n Error:'+JSON.stringify(err,undefined,2));
});

module.exports=mysqlConnection