const { appBarClasses } = require('@mui/material');
const express=require('express');
const router=express.Router();

const person=[{
    "name":"Wes",
    "age":20
}];

const fileName='/home/w/express-app/index.html';
const error404='/home/w/express-app/404.html';

router.get("/", (req,res)=>{
    res.sendFile(fileName)
});

router.get("/:id", (req, res)=>{
    res.send(`This is the id you requested ${req.params.id}`)
})

// multiple URL parameters
router.get("/things/:name/:id", (req, res)=>{
    res.send(`The name parameter is ${req.params.name} and the id parameter is ${req.params.id}`);
})


router.get("/integerparam/:id([0-9]{4})", (req, res)=>{
    if(isNaN(req.params.id)){
        res.send(`The pattern entered is not a four digit integet`)
    }

    res.send(`This is the regEx pattern matched id in the URL: ${req.params.id}`)

})
router.post("/", (req, res)=>{
    res.send(person)
});
router.get('*', (req, res)=>{
    res.sendFile(error404)
})

// make the module exportable
module.exports=router;