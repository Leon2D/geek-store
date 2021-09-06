const mongoose = require("mongoose");
const uri =
"mongodb+srv://admin-test-geek:admin-test-geek@dev.fqf9p.mongodb.net/dev_decathlon?retryWrites=true&w=majority";
// Prints "MongoServerError: bad auth Authentication failed."
mongoose 
 .connect(uri)   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
  module.exports = mongoose;