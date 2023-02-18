const mysql =require('mysql');

// create mysql connection
const db_conn=mysql.createConnection({
    user:"root",
    host:"127.0.0.1",
    password:"root",
    database:"mern_demo"
});

// consume the connection
db_conn.connect(err=>{
    if (err){
        throw err
    }

    console.log(`>>>->>> Database connection running <<<-<<<`);
})

exports.module=db_conn;