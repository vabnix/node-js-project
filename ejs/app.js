const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

//registering express
const app = express();

//connect to mongodb

const mongodbURI = 'mongodb+srv://<user>:<password>@development.ktayswy.mongodb.net/node-tut?retryWrites=true&w=majority&appName=development';

//mongoose.connect(mongodbURI,{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(mongodbURI)
    .then((result) => {
        console.log('connected to db');
        //listening to request only when database connection is established
        app.listen(3000);
    })
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//listening for request
//app.listen(3000);

//mongoose and sanbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'Hello Blogger',
        snippet: 'This is for all good bloggers out there',
        body: 'Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur'
    });

    blog.save().then((result) => {
        res.send(result)
    }).catch((err) => {
            console.log(err);
        })
});

app.get('/all-blogs', (req, res) => {
    Blog.find().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    });
})

app.get('/single-blog', (req, res) => {
    Blog.findById('65f86631fa13b4c8be7b0055').then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    });
})


app.get('/', (req, res) => {
    //sending sample data
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];

    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create New Blog' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

