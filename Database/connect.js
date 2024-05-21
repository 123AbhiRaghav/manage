const mongoose = require("mongoose")

let connect = async()=>{
    let dbName = process.env.dbName
    let dbUrl = process.env.dbUrl

    try {
        mongoose.connect(`${dbUrl}/${dbName}`)
        console.log(`Database connected Successfully`)
    } catch (error) {
        console.log(error);
    }
    

}

module.exports = connect;