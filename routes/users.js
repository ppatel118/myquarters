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
        favorites: [],
        profilePic: "",
        posts: []
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
                        favorites: user.favorites,
                        profilePic: user.profilePic,
                        posts: user.posts
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
router.put('/favorite', (req, res, next) => {
    const updatedUser = req.body;
    User.getUserById(req.body.id, (err, user) => {
        user['favorites'] = updatedUser['favorites'];

        User.updateUser(user, (err, user) => {
            if(err) {
                res.json({success: false, msg:'Failed to update favorites.'});
            } else {
                res.json({success: true, msg:'Favorites updated.'});
            }
        });
    });

});

router.put('/post', (req, res, next) => {
    const updatedUser = req.body;
    User.getUserById(req.body.id, (err, user) => {
        user['posts'] = updatedUser['posts'];

        User.updateUser(user, (err, user) => {
            if(err) {
                res.json({success: false, msg:'Failed to update posts.'});
            } else {
                res.json({success: true, msg:'Posts updated.'});
            }
        });
    });

});
router.put('/profilePic', (req, res, next) => {
    const updatedUser = req.body;
    User.getUserById(req.body.id, (err, user) => {
        user['profilePics'] = updatedUser['profilePics'];

        User.updateUser(user, (err, user) => {
            if(err) {
                res.json({success: false, msg:'Failed to update profile pic.'});
            } else {
                res.json({success: true, msg:'Favorites profile.'});
            }
        });
    });

});

module.exports = router;