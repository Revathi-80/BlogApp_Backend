// const express = require('express');
// const app = express();

// require("dotenv").config();
// const PORT = process.env.PORT || 4000;

// //mildware
// app.use(express.json());

// const blog = require("./routes/blog")

// //mount with route blog
// app.use("/api/v1",blog);

// //connect with db
// const connectwithDB = require("./config/database");
// connectwithDB();

// // start server
// app.listen(PORT, () =>{
//     console.log(`app is started at ${PORT}`);
// })





// //initial checking

// // app.listen(3000, () => {
// //     console.log("App is running");
// // })
// app.get("/",(req,res) =>{
//     res.send(`<h1>This is homepage</h1>`);
// })




//server instance
const express = require("express");
const app = express();
//load config from env file
//config load in process object
require("dotenv").config();
const PORT = process.env.PORT ||4000;
//middleware to parse json request body
// limk app to mildware
app.use(express.json());
//import routes for todo api
const blog = require("./routes/blog");
//mount the todo api route
app.use("/api/v1",blog);
//start server
app.listen(PORT, () =>{
    console.log(`server started successfully at ${PORT}`);
})
//database connection
const dbConnect = require("./config/database");
dbConnect();
// default route
app.get('/',(req,res) => {
    res.send('<h1>This is homepage</h1>');
})