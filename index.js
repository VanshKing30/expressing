const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json()); 

app.get('/' , (req , res) =>{
    res.send("Hello Vansh");
})

app.get('/api/v1' , (req , res)=>{
    res.send("You are at the api page");
})

app.post('/home' , (req , res)=>{
    const {title, des} = req.params.body;
    if(!title){
        console.log("Title was not provoided");
        res.send("The title was not provided");
        
    }
    else{
        res.send("Hey homie");
        console.log(req.params.number);
    }
})

app.post('./api/v1/posts' , (req , res) =>{
    res.send("Post has been recieved")}
)

app.listen(PORT , ()=>{
    console.log(`The app is listninig on ${PORT}`);
});