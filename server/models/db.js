const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, (err)=>{
    if(!err){
        console.log('mongodb connected!');
    }else{
        console.log('error while connectiong DB: ' + JSON.stringify(err, undefined, 2));
    }
});

require('./user.model')