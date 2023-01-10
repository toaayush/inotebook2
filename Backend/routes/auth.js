const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "Ayushisabad$boy";

//ROUTE 1: Create a User using : POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({
            success,
            error: "Sorry a user with this email already exists",
          });
      }
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken, user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 2: Authenticate a User using : POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({
            success,
            error: "Please try to login with correct credentials",
          });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken, user });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

//ROUTE 3: Get loggedin User Details using : POST "/api/auth/getuser". Login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

//ROUTE 4: Update loggedin User Details using : POST "/api/auth/updateuser". Login required
router.put("/updateuser/:id", fetchuser, async (req, res) => {
  let success = true;
  const { name, email, password, age } = req.body;
  try {
    //Create a newNote object
    const newUser = {};
    if (name) {
      newUser.name = name;
    }
    if (email) {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res
          .status(400)
          .json({
            success,
            error: "Sorry a user with this email already exists",
          });
      }
      newUser.email = email;
    }
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);
      newUser.password = secPass;
    }
    if (age) {
      newUser.age = age;
    }
    //Find the user to be updated and update it
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("Not Found");
    }
    if (user.id.toString() !== req.user.id) {
      console.log(user.id);
      return res.status(401).send("Not Allowed");
    }
    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: newUser },
      { new: true }
    );
    res.json({ success, user });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
