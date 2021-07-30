const express = require('express')
const path = require('path')
const ejs = require('ejs');
const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use("/static", express.static('./static'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/login', (req, res) => {
    res.render('login');
});

const port1 = 5000;

app.listen(port1, () => console.log(`Port ${port1}`));

