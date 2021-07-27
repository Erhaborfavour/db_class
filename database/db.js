const mongoose = require("mongoose");

function dbConfig(){
    try {
        mongoose.connect(process.env.mongo_db,{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log( "database connected")
    }catch(error){
        console.log(error)

        }
    }
module.exports=dbConfig;