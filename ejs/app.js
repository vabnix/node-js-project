const express = require('express');
const mongoose = require('mongoose');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');
const properties = require('./properties');

//registering express
const app = express();

//connect to mongodb

const mongodbURI = 'mongodb+srv://' + properties.db_user + ':' + properties.db_password + '@development.ktayswy.mongodb.net/node-tut?retryWrites=true&w=majority&appName=development';

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
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});