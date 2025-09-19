const express = require("express");
const mongoose = require("mongoose");

const users = require("../models/userModel");

const router = express.Router();

// Create Operation ----------------- 🚀🚀

// when user enter the data we have to grab that data
// here name,email,age come from the frontend and other from backend

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;

  try {
    const userAdded = await users.create({
      name: name,
      email: email,
      age: age,
    });

    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Email already exists" });
  }
});

// READ OPERATIONS ------------------ 🚀🚀

router.get("/", async (req, res) => {
  try {
    const showAll = await users.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// GET Single User OPERATIONS ------------------ 🚀🚀

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await users.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE OPERATIONS ------------------ 🚀🚀

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await users.findByIdAndDelete({ _id: id });
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// UPDATE OPERATIONS ------------------ 🚀🚀

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  try {
    const updateUser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

//to export data from url we use ( req.PARAMS )
// to export from input fields we use ( req.body)

//_id: id here _id is id that database give yu bydefault and id is get from http url we set id in _id of bydefault created by database see in postman
