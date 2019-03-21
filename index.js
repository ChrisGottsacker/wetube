import express from "express";

// var express = require('express')
var app = express()

const PORT = 4000;

const handlelistening = () => console.log(`Listening on: http://localhost:${PORT}`);

// express object sends request and response object to handler function
const handleHome = (req, res) => {
    console.log("handleHome");
    res.send("Hello from home");
}

// function handleProfile(req, res) {
//     res.send("Hello from my profile");
// }
const handleProfile = (req, res) => res.send("Hello from my profile");

const betweenHome = (req, res, next) => {
    console.log("betweenHome");
    next();
}

// app.get("/", handleHome);
app.get("/", betweenHome, handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handlelistening);