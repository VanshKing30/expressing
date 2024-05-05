const express = require('express');
const app = express();



app.use(express.json());

// app.get("/" , (req ,res)=>{
//     res.send("Hello jii");
// })
app.post("/" , (req , res)=>{
    const kidneys  = req.body.kidneys;
    const lenghtOfKidneys = kidneys.length;

    console.log("connection type " , req.headers);
});

let users = [{
    name : "Vansh",
    age : 21,
    dep : "Comp"
} ,
{
    name :"Virat",
    age : 25,
    dep : "Entc"
}];
function decorate(){

    return users;
}

app.get('/getUsers' , (req , res)=>{

    const users = decorate();

    res.json({
        users
    });
})

app.get("/getData" , (req , res)=>{
    res.json({
        name : "Vansh",
        age : 21
    });
});


app.get('/uwu' , (req ,res)=>{
    res.send("NEw get req. recieved");
});


let user = {
    name : "Vanhs",
    age : 21,
    dep : "Computer"
};



app.post("/addNewKidney", (req , req)=>{

    const obj = req.body.user;

    res.json({
        msg : "The user was recieved"
    });

});


app.listen(3000 , ()=>{
    console.log("serveer is active");
})