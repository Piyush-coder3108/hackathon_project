const express= require('express');
const passport=require('passport');
const Router= express.Router();
const home=require('../controllers/home_page_controller');


Router.get('/',(req,res)=>{
    res.render('index');
});

Router.get('/customer',(req,res)=>{
    res.render('customer');
})



Router.post('/signin',passport.authenticate('local', {failureRedirect: '/'}),home.signin);

Router.post('/signup',home.Signup);




module.exports=Router;