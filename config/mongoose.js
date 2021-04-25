const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://piyush:piyush@userdetail.lpxe0.mongodb.net/hackathon?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error in connection Mongodb"));

db.once('open',()=>{
    console.log("Mongodb conencted");
});

module.exports=db;