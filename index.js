const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors')

// parsing the incoming api data
app.use(express.json({extends: false}));

// dev only
app.use(cors());

// bringing the connectoion func
require("./config/connectDb").connectToDB()
.then(()=> console.log("Connected to db"))
.catch((error) => console.log(error));

//getting the env variable
require("dotenv").config();

//getting the search api file --path /api/search/:word
const search = require("./routes/api/word-api");
app.use("/api",search);

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client1/build'));

    app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'client1', 'build', 'index.html')) });
}

app.listen(PORT,()=> console.log("running on  " + PORT));