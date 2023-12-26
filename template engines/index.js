const express = require('express');

const app = express();
const PORT = 8000;

app.use(express.static('public'));

// tell your application that you are setting up a view engine
app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    res.json({status:"up"});
})

app.get('/profile',(req,res)=>{
    res.send('Welcome to profile page');
})

app.get('/profile/:username/:email',(req,res)=>{
    // console.log(req.params);
    // res.sendFile(__dirname+'/profile.html');
    // res.render('nameOfFile', {piece of info in key value pair..... eg: key: value, key2:value2})
    res.render('profile', {username:req.params.username, email:req.params.email})
})

app.listen(PORT,(err)=>{
    if(!err)
        console.log('🔥 Server is up and running on PORT ', PORT)
});