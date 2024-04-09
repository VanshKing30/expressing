const express = require('express');
const app = express();

const PORT = 3000;

app.get('/' , (req , res) =>{
    res.send("Hello Vansh");
})

app.listen(PORT , ()=>{
    console.log(`The app is listninig on ${PORT}`);
});