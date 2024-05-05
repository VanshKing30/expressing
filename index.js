const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/" , function(req , res) {
    //
    res.send('<b>I am Vansh</b>');

});

app.get("/getData" , (req , res)=>{
    res.json({
        name : "Vansh",
        age : 21
    });
});


app.get('/uwu' , (req ,res)=>{
    res.send("NEw get req. recieved");
});



app.post('/convos' , (req , res)=>{

    console.log(req.headers.connection);
   

    res.json({
        name : "vansh",
        dep : "computer"
    })
    
})

app.listen(PORT , ()=>{
    console.log(`The app is listninig on ${PORT}`);
});