const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
     {title: 'Yoshi finds the eggs', snippet: 'Lorem ipsum'},
     {title: 'Bowser is happy', snippet: 'Lorem ipsum dolor'},
     {title: 'Mario is sad', snippet: 'Lorem ipsum sit'},   
    ];
    //res.send('<p>home page</p>');
    // res.sendFile('./views/index.html', {root: __dirname });
    res.render('index', {title: 'Home', blogs});
});
app.get('/about', (req, res) => {
    //res.send('<p>about page</p>');
    // res.sendFile('./views/about.html', {root: __dirname });
    res.render('about', {title: 'About me'});
});

// redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
})

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', {title: '404'});
});