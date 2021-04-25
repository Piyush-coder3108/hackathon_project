const User=require('../models/user');
const bcrypt=require('bcryptjs');

module.exports.signin=(req,res)=>{
    if(req.isAuthenticated()){
        res.send("hello");
    }
    else{
        res.redirect('/');
    }
   
}


module.exports.Signup=(req,res)=>{
    const {fullname,email,password,mobile}=req.body;
    
    User.findOne({email: email})
    .then(user=>{
        if(user){      
            console.log('User already Present !!!!!');
            res.redirect('/');
        }
        else{
            const newUser= new User({
                email: email,
                password: password,
                fullname: fullname,
                mobile: mobile
            });

            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password,salt,(error,hash)=>{
                    if(error){ console.log(error)}
                    else{
                        newUser.password=hash;
                        newUser.save();
                    }
                })
            })
           
            res.redirect('/');
        }
    })
    .catch(err=>{ console.log(err)});
    
}