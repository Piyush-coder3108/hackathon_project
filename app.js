const express=require('express');
const session= require('express-session');
const db= require('./config/mongoose');
const passport=require('passport');
const expressLayouts= require('express-ejs-layouts');
const passportlocal=require('./config/passport-local-strategy');
const app=express();




// Body parser
app.use(express.urlencoded({extended: false}));


//Serve Static files
app.use(express.static('./public'));

app.use(expressLayouts);

// Extraxt css and script files 
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



// View engine
app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    name: 'hackathon',
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));


// Passport 
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);


app.use('/',require('./routes/index'));







const PORT= process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`Server running at PORT: ${PORT}`)
})