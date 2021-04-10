
const mongoose = require("mongoose");

exports.connectToDB = async ()=>{
    try {
        await mongoose.connect(`Your url string`,
         { useNewUrlParser: true ,
          useUnifiedTopology: true
        });
      } catch (error) {
        throw(error);
      }
}