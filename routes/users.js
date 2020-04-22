const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

//@route POST api/users
//@desc  Register a user
//@access Public
router.post(
  "/",
  [
    check("name", "Please enter a name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Please enter a password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    //res.send(req.body); // для того чтобы использоапть это бодт нужно добавить мидлваре app.use(express.json({ extended: false })); эту строку добавляем
    // теперь с помощью валидатора мы ограничим что мы посылаем
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already Exixts" });
      }
      user = new User({
        name,
        email,
        password,
      });
      //before save to td we encrypd passwors
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //save to db await user.save(); but this is not what we need we need send jwt to client
      await user.save();
      const payload = {
        id: user.id, // only want to sent user it and with this id we can asses all content of this uset
      };
      //creating jwt
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 50000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error("errors.message", errors.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
