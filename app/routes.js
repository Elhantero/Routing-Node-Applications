const express = require('express');
const router = express.Router();
const path = require('path');

// export the router
module.exports = router;

//routes define here
router.get('/',         showHome);
router.get('/about',    showAbout);
router.get('/contact',  showContact);
router.post('/contact', processContact);
router.get('/:username/:post_slug', showProfile);

//404
router.use(show404);


function showHome(req, res){
    res.sendFile(path.join(__dirname, '../index.html'));
};

function showAbout(req, res) {
    res.json({ message: 'im the about page' });
};

function showContact(req, res) {
    res.sendFile(path.join(__dirname, '../contact.html'));
};
    
function processContact(req, res){
    console.log(req.body);
    res.send('Hello ' + req.body.name + ' !');
};

function showProfile(req, res){
    console.log(req.params);
    res.send('You are the best ' + req.params.username + ' by ' + req.params.post_slug);
};

function show404(req, res, next){
    res.status(404);
    res.sendFile(path.join(__dirname, '../404.html'));
};