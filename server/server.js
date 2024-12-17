const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Creating a Database Connection
mongoose
  .connect("mongodb+srv://meharmiddha:mehar@cluster0.aicsg.mongodb.net/")
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

// Specifying which domain can access access which resources
app.use(
    cors({
        origin : 'http://localhost:5173/',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());
app.listen(PORT, ()=>console.log(`Server is now running on port ${PORT}`));