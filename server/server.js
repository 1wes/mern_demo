const express=require('express');
const app=express();
const message=require('./message');
const port=3030;
// const cors=require('cors');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cors);

app.use("/message", message)

// app.get("/server/message", (req, res)=>{
//     res.send(`This message has been sent from the backend and includes status: ${res.statusCode}`);
// })
// static files


app.listen(port, ()=>{
    console.log(`The app is running at localhost:${port}`);
});



