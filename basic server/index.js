// require the relavant packages
const express = require('express');
const app = express();

// handle routing
// syntax of defining routes
// httpVerbs - get, post, put, update, delete
// app.HttpVerb(route, controller)

app.get('/',(request, response)=>{
    // console.log('we are at the home route of our firstly created api')
    // console.log('request object inside get method',request);
    // console.log('response object inside get method',response);

    //1. send simple messages from server as response
    // response.send('<h1>hello from our newly created api</h1>');

    // 2. send static files (html files)
    // console.log(__dirname)
    // response.sendFile(__dirname +'/index.html');

    // 3. send json data 
    response.status(200).send({"message":"server is up and running"});
})


app.get('/info', (req, res)=>{
    res.send({'message':"this is express based api"});
})

app.get('/products',(req, res)=>{
    let products = [
        {id:1, product:"abc", price:99},
        {id:2, product:"xyz", price:97},
        {id:3, product:"tyu", price:456},
        {id:4, product:"rtg", price:3},
    ]
    // console.log(first)
    res.send({products});
})
// "/" - home route
// "/about"
// "/contact"
// "/status"
// make the server go live/ make the server listen to a port

app.listen(8000,(err)=>{
    if(!err)
    console.log('server is running on port 8000')
});