const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const data = require("../data");
const userData = data.userData

router.get('/', async (req, res) => {
    try {
        if(req.session.user) {
            return res.redirect("posts/private")
        } else {
            res.render('posts/login', {title:'Login'})
        }
    } catch(e) {
        res.status(400).render('posts/login', {title:'error', error:'provide a valid username or passoword'})
    }
})

router.get('/signup', async (req, res) => {
    try {
        if(req.session.user) {
            req.session.user = username;
            res.render('/private', {user: username})
        } else {
            res.render('posts/signup', {title:'singup'})
        }
    } catch(e) {
        res.status(400).render('posts/signup', {title:'error', error:'provide a valid username or passoword'})
    }
})

router.post('/signup', async (req, res) => {
    try {
        const {username, password} = req.body;

        if(await userData.createUser(username, password)) {
            req.session.user = username;
            res.render('posts/private', {user: username})
        } else {
            res.status(400).render('posts/signup', {title:'error', error:'provide a valid username or passoword'})
        }
    } catch(e) {
        res.status(400).render('posts/signup', {title:'error', error:'provide a valid username or passoword'})
    }
})

router.post('/login', async (req, res) => {
    try {
        const {username, password} = req.body;

        if(await userData.checkUser(username, password)) {
            req.session.user = username;
            res.render('posts/private', {user: username})
        } else {
            res.status(400).render('posts/login', {title:'error', error:'provide a valid username or passoword'})
        }

    } catch(e) {
        res.status(400).render('posts/login', {title:'error', error:'provide a valid username or passoword'})
    }
})

router.get('/private', async (req, res) => {
    username = req.body.username

    try {
        res.render('posts/private', {user:username})
    } catch(e) {
        res.status(400).render('posts/login', {title:'error', error:'provide a valid username or passoword'})
    }
})

router.get('/logout', async (req, res) => {
    try {
        req.session.destroy()
        res.render('posts/logout', {title:'logout'})
    } catch(e) {
        res.status(400).render('posts/login', {title:'error', error:'provide a valid username or passoword'})
    }
})

module.exports = router;