import express from "express";

// var express = require('express')
var app = express()

const PORT = 4000;

function handlelistening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res){
    console.log('Hi from home');
    res.send("Hello from home");
}

function handleProfile(req, res) {
    res.send("Hello from my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(4000, handlelistening);