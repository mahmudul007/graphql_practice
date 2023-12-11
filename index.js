const { get } = require("http");

const express = require("express");
const User = require("./Model/user");
const mongoose = require("mongoose");
const exp = require("constants");
const uri =
  "mongodb+srv://airvila:oW2Zw26tOa6WawKa@cluster0.teo92.mongodb.net/BookingEngine?retryWrites=true&w=majority";
const app = express();
app.use(express.json());

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(Error, err.message);
  });

app.post("/create/user", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(user);
  } catch (err) {
    res.send(err);
  }
});
app.get("/get/user", async (req, res) => {
  try{
    const user = await User.find();
    res.json(user);
  }
  catch(err){
    res.send(err);
  }
});
app.get("/get/user/:id", async (req, res) => {
  try{
    const user = await User.findById(req.params.id);
    res.json(user);
  }
  catch(err){
    res.send(err);
  }
}
);
app.delete("/delete/user/:id", async (req, res) => {
  try{
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  }
  catch(err){
    res.send(err);
  }
}
);
app.patch("/update/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.send(err);
    
  }
});

app.listen(3000, () => console.log("Server running"));
