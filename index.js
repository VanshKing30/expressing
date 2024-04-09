const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/" , function(req , res) {
    //
    res.send('<b>I am Vansh</b>');

})

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