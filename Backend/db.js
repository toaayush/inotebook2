const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://raj_ayush:Aayush2003@newcluster.k2gmzo8.mongodb.net/test"

const connectToMongo = ()=> {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;