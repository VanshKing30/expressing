const express = require('express');
const app = express();

const PORT = 3000;

app.get('/' , (req , res) =>{
    res.send("Hello Vansh");
})

app.get('/api/v1' , (req , res)=>{
    res.send("You are at the api page");
})

app.listen(PORT , ()=>{
    console.log(`The app is listninig on ${PORT}`);
});