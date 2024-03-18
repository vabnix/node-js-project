const express = require('express');

//registering express
const app = express();

//register view engine
app.set('view engine', 'ejs');

//listening for request
app.listen(3000);

app.get('/', (req,res)=>{
    //sending sample data
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];

    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req,res)=>{
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req,res)=>{
    res.render('create', { title: 'Create New Blog'});
});

app.use((req,res)=>{
    res.status(404).render('404', { title: '404'});
});

