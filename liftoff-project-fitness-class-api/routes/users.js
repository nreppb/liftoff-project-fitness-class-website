const router = require('express').Router();
let User = require('../models/users.model');
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var passport = require('passport');

// const { ModuleResolutionKind } = require('typescript');
// User.use(cors())

// process.env.SECRET_KEY = 'secret'

// User.post('/register', (req,res) => {
//     const today = new Date()
//     const userData = {
//         username: req.body.username,
//         password: req.body.password,
//         name: req.body.name,
//         description: req.body.description
//     }

// User.findOne({
//     username: req.body.username
// })
//     .then(User => {
//         if(!User) {
//             bcrypt.hash(req.body.password, 10, (err, hash) => {
//                 userData.password = hash
//                 User.create(userData)
//                 .then(User => {
//                     res.json({ status:User.username + 'Registered'})
//                 })
//                 .catch(err => {
//                     res.send('error: ' + err)
//                 })
//             })
//         } else {
//             res.json({ error: 'User already exists'})
//         }
//     })
//     .catch(err => {
//         res.send('error: ' + err)
//     })

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));

})
// })

// User.post('/login', (req, res) => {
//     User.findOne({
//         username: req.body.username
//     })
//     .then(User => {
//         if (User) {
//         if(bcrypt.compareSync(req.body.password, user.password)) {
//             // Passwords match
//             const payload = {
//                 _id: user._id,
//                 name: user.name,
//                 username: user.username
//             }
//             let token = jwt.sign(payload, process.env.SECRET_KEY, {
//                 expiresIn: 1440
//             })
//             res.send(token)
//         } else {
//             // Passwords don't match
//             res.json({ error: 'User does not exist' })
//         }
//     } else {
//         res.json({ error: 'User does not exist' })
//     }
// }) 
// .catch(err => {
//     res.send('error: ' + err)
// })
// })

// User.get('/profile', (req, res) => {
//     let decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//     User.findOne({
//         _id: decoded._id
//     })
//     .then(User => {
//         if (User) {
//             res.json(User)
//         } else {
//             res.send('User does not exist')
//         }
//     })
//     .catch(err => {
//         res.send('error: ' + err)
//     })
// })

router.post('/register',function(req,res,next) {
    addToDB(req, res);
})

async function addToDB(req,res) {
    var user = new User({
        email:req.body.email,
        username:req.body.username,
        password:User.hashPassword(req.body.password),
        creation_dt:Date.now()

    });

    try{
        doc = await user.save();
        return res.status(201).json(doc);
    }
    catch(err){
        return res.status(501),json(err);
    }
}

router.post('/login', function(req,res,next) {
        passport.authenticate('local', function(err, user, info) {
          if (err) { return res.status(501).json(err); }
          if (!user) { return res.status(501).json(info); }
          req.logIn(user, function(err) {
            if (err) { res.status(501).json(err); }
            return res.status(200).json({message:'Login Success'});
          });
        })(req, res, next);
})


// router.route('/add').post((req, res) => {
//     const email = req.body.email;
//     const username = req.body.username;
//     const password = req.body.password;
//     // const name = req.body.name;
//     // const description = req.body.description;

//     const newUser = User({
//         email,
//         username,
//         password,
//         // name,
//         // description,
//     });

//     newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

// router.get('/user',isValidUser,function(req,res,next){
//     return res.status(200).json(req.user);
//   });
  
//   router.get('/logout',isValidUser, function(req,res,next){
//     req.logout();
//     return res.status(200).json({message:'Logout Success'});
//   })
  
//   function isValidUser(req,res,next){
//     if(req.isAuthenticated()) next();
//     else return res.status(401).json({message:'Unauthorized Request'});
//   }


module.exports = router;
// module.exports = User;