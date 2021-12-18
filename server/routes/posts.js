const router = require('express').Router();
const User = require('../models/User');
const verify = require('./verifyToken')

router.get('/', verify, (req, res)=>{
    if(req.user.roles === 'Editor' || req.user.roles === 'Admin'){
        res.json({posts:{
            title: 'my first post',
            description: 'random description'
        }})
    }else{
        res.status(400).send('not authorized')
    }

})

router.get('/lists', verify, function(req, res) {

    console.log("checking....", req.headers);

    if(req.user.roles === 'Admin'){
        User.find({}, function(err, users) {
            var userMap = {};
        
            users.forEach(function(user) {
              userMap[user._id] = user;
            });
        
            res.send(userMap);  
          });
    }else {
        res.status(400).send('not authorized')
    }

  });

// router.get('/', (req, res)=>{
//     res.json({posts:{
//         title: 'my first post',
//         description: 'random description'
//     }})
// })

module.exports = router;