const mongoose = require("mongoose");

// mongoose.connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
//     console.log("mongodb is connected")
// });


const connectDatabase = () =>{
    mongoose.connect(`${process.env.DB_URL}`,{
        useNewUrlParser:true,
        // useUnifiedToplogy:true,

    }).then((data) =>{
        console.log(`mongodb is connected with server:${data.connection.host}`);
    })
}


module.exports = connectDatabase