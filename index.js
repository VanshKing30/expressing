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

    res.send("you have" + lenghtOfKidneys + "kidneys" + req.headers.username );
});

app.post("/addNewKidney", (req , req)=>{

    const obj = req.body.user;

    res.json({
        msg : "The user was recieved"
    });

});


app.listen(3000 , ()=>{
    console.log("serveer is active");
})