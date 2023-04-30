var express = require('express');
var app = express();
var sql = require("mssql");
const cors = require("cors")
const http = require("http");
const {Server} = require("socket.io")

app.use(cors());

app.use(express.json())

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["get","post"]
    }
})


server.listen(5000, function () {
    
    ///Server is connect
    console.log('Server is running..');

    ///Database is connected
    sql.connect(config).then(() => {
        console.log('Connected to SQL Server');
    }).catch(err => {
        console.log('Failed to connect to SQL Server', err);
    });
    
});


// config for your database
const config = require("./DataBase/dbConfig")    



app.post('/addData',function(req,res){
    console.log("hello")
    const EmployeeID = req.body.EmployeeID
    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    console.log("hello")
    const Age = req.body.EmployeeID
    const Gender = req.body.Gender
    console.log("hello")
    var m = parseInt(Age)
    sql.query(`INSERT INTO EmployeeDemo (EmployeeID, FirstName, LastName, Age, Gender) VALUES ('${EmployeeID}', '${FirstName}','${LastName}','${11}','${Gender}')`
    ,(err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send("values Inserted")
        }
    })
})

app.get('/myname', function (req, res) {
    sql.query('SELECT * FROM EmployeeDemo').then(result => {
        console.log(result.recordset);
        res.send(result.recordset)
    }).catch(err => {
        console.log('Failed to execute query', err);
    });
    // connect to your database
   // sql.connect(config, function (err) {
   //     if (err) console.log(err);
   //     // create Request object
   //     var request = new sql.Request();
   //     // query to the database and get the records
   //     request.query('select  * from EmployeeDemo', function (err, recordset) {
   //         if (err) console.log(err)
   //         // send records as a response
   //         res.send(recordset);
   //         sql.close();
   //     });
   // });
   
});


//import express from "express";
//import cors from  "cors"
//const config = require("./dbConfig")
//sql = require("msnodesqlv8");
// sql.query(config,query,(err,rows)=>{
//    console.log(rows);
// })

//const sql = require('mssql/msnodesqlv8')
//const cors = require("cors") 
////const { response } = require("express")
//const express  = require("express")
//const config = require("./DataBase/dbConfig")
//
//sql.connect(config,function(err){
//    if(err){
//        console.log(err);
//    }
//    var request = new sql.Request()
//    request.query("select * from Advisor",function(err,recordSet){
//        if(err){
//            console.log(err)
//        }
//        else{
//            console.log(recordSet)
//        }
//    })
//})
//
////const query = "select * from EmployeeDemo"
//const configg = require("./DataBase/dbConfig")
//sql = require("mssql/msnodesqlv8");
//var config = {
//    database: "testdatabase",
//    server:"
//}
// sql.query(configg,query,(err,rows)=>{
//    console.log(rows);
// })
//
//dbOperation = require("./DataBase/dbOperation")
//dbOperation.getEmployee().then(res=>{
//    console.log(res);
//})



//const app = express();
//
// 
//app.use(cors());
//
//
//app.get("/getData",(req,res) => {
//    res.send("HEllo");
//})
//
//app.listen(5000,()=>console.log(`app is running`));
//
//

//    var config = {
//        user: 'sa',
//        password: '123456789',
//        server: 'DESKTOP-24Q93AJ',
//        database: 'testdatabase',
//        options: {
//            encrypt: true,
//            trustServerCertificate: true
//          }
//    };
//





//var sql = require("mssql");
//    // config for your database
//    var config = {
//        user: 'sa',
//        password: '123456789',
//        server: 'DESKTOP-24Q93AJ',
//        database: 'testdatabase',
//        options: {
//            encrypt: true,
//            trustServerCertificate: true
//          }
//    };
//    // connect to your database
//    sql.connect(config, function (err) {
//        if (err) console.log(err);
//        // create Request object
//        var request = new sql.Request();
//        // query to the database and get the records
//        request.query('select  * from EmployeeDemo', function (err, recordset) {
//            if (err) console.log(err)
//            // send records as a response
//            console.log(recordset)
//            res.send(recordset);
//        });
//    });
//    //sql.close();