const express=require('express');
const router=express.Router();
require('dotenv').config();
const jwt=require('jsonwebtoken');
const db_conn=require('./db.js'); 
// const crypto=require('crypto');

const tokenKey=process.env.TOKEN_SECRET_KEY;

let signToken=(username)=>{

    return jwt.sign(username, tokenKey, {expiresIn:'3600s'});
};

router.post("/", ( req, res)=>{

    let user_reg_details={
        username:req.body.username,
        password:req.body.password,
        message:req.body.message
    }

    const token=signToken({username:user_reg_details.username})

    res.send(token);

    // console.log(`The payload: ${JSON.stringify(user_reg_details)}`)

    // sql statement
    let insert_sql="INSERT into users SET ?"

    db_conn.query(insert_sql, user_reg_details, (err, result)=>{

        if (err){
            throw err
        }

        res.send(result)
    })
})

module.exports=router;