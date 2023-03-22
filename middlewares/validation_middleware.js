
//importing modules
const express = require("express");
const { db } = require('../config/sqlConnection');
//Assigning db.users to User variable
const User = require('../schemas/users');

//Function to check if username or email already exist in the database
//this is to avoid having two users with the same username and email
 const saveUser = async (req, res, next) => {
 //search the database to see if user exist
 try {
   const username = await User.findOne({
     where: {
        username: req.body.username,
     },
   });
   //if username exist in the database respond with a status of 409
   if (username) {
     //return res.json(409).send("username already taken");
     throw new Error('Email o nombre de usuario ya registrados')
   }

   //checking if email already exist
   const emailcheck = await User.findOne({
     where: {
       email: req.body.email,
     },
   });

   //if email exist in the database respond with a status of 409
   if (emailcheck) {
     //return res.json(409).send("Authentication failed");
     throw new Error('Email o nombre de usuario ya registrados')
   }

   next();
 } catch (error) {
   console.log(error);
 }
};

//exporting module
 module.exports = {
 saveUser,
};