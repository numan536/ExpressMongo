const express = require('express');

const app = express();

app.get('/' ,(req,res)=>{
    res.send('Hello world!');

});

app.get('/posts',(req,res)=>{
    res.send([
        {
            id: 1,
            description: 'This is my first apis'
        },
        {
            id: 2,
            description: 'This is my first apis'
        },
        {
            id: 3,
            description: 'This is my first apis'
        }
    ])
});

app.listen(3000,()=> console.log('listening in port 3000'));
