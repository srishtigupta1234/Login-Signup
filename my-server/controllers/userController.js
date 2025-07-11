const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try{
    const { name,email,mobile,password } = req.body;
    if(!name || !email || !mobile || !password){
        return res.status(400).json({message : "All feilds are required"});
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message :"Email already registered"})
    }
    const hashed = await bcrypt.hash(password,10);
    const user = new User({ name,email,mobile,password:hashed });
    await user.save();
    res.status(201).json({message : "User created successfully"});
  }catch(err){
     console.log(err);
    res.status(500).json({message : "Internal server error"});
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).json(newUser);
};

module.exports = { registerUser, createUser };
