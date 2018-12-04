const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        favorites: []
        // profilePic: req.body.profilePic,
        // posts: req.body.posts
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg:'Failed to register user.'});
        } else {
            res.json({success: true, msg:'User registerd.'});
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user) {
            return res.json({success: false, msg: 'User not found.'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        favorites: user.favorites
                        // profilePic: user.profilePic,
                        // posts: user.posts
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user:req.user});
});

//Update Profile
router.put('/favorites', (req, res, next) => {
    const img = req.body.img;
    User.getUserById(req.body._id, (err, user) => {
        user.favorites = ["hello3"];
        User.updateUser(user, (err, user) => {
            if(err) {
                res.json({success: false, msg:'Failed to update favorites.'});
            } else {
                res.json({success: true, msg:'Favorites updated.'});
            }
        });
        console.log(user);
        });

});

module.exports = router;