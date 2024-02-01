const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");
const secret = "kjfnkauerhafba8372i1";

app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://gachaBlogMern:NcOboLtwBySVA9Bw@cluster0.m5omvbh.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try{
    const userDoc = await User.create({ 
      username, 
      password:bcrypt.hashSync(password, salt), 
    });
    res.json(userDoc);
  } catch(e){
    res.status(400).json(e);
  }
});

app.post("/login", async (req,res)=>{
  const { username, password } = req.body;
  const userDoc = await User.findOne({username});
  const passwordMatch = bcrypt.compareSync(password, userDoc.password);
  // res.json(passwordMatch);
  if(passwordMatch){
    // loggin successful
      jwt.sign({username, id:userDoc._id}, secret, {}, (err, token)=>{
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          username,
        });
      })
    // res.json({});
  } else {
    res.status(400).json("Invalid username or password");
  }
});

app.get("/profile", (req,res)=>{
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info)=>{
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req,res)=>{
  res.cookie("token", "").json("ok");
});

app.listen(4000);
// 