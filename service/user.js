const User = require("../Model/user");
var bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const generateToken = (user) => {
  try {
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      "somesupersecretkey",
      { expiresIn: "1h" }
    );
    return token;
    
  }
  catch (error) {
    throw error;
  }
}

const createUser = async (name, email, password) => {
  try {

    const hashPassword = await bcrypt.hash(password, 10);
    const userData = await User.create({
      name,
      email,
      password: hashPassword,
    });   
    const token=generateToken(userData);
    return {token,user:userData};
  } catch (error) {
   return error;
  }
};

const getUser = async () => {
  try {
    const userData = await User.find();
    console.log(userData);
    return userData;
  } catch (error) {
    console.log(error);
  }
};
const getUserById = async (id) => {
  console.log(id);
  try {
    const userData = await User.findById(id);
    return userData;
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (id, name, email, password) => {
  try {
    const updateUser = await User.findByIdAndUpdate(id, {
      name,
      email,
      password,
    });
    console.log(updateUser);
    return updateUser;
  } catch (error) {}
};

const deleteUser = async (id) => {
  try {
    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      throw new Error("User not found");
    }
    const message = {
      message: "User deleted successfully",
    };
    return message;
  } catch (error) {
    return (message = {
      message: "User not found",
    });
  }
};

const login = async (email, password,token) => {

  try {
    
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
   
    if (!isMatch) {
      throw new Error("Password not match");
    }
    const token=generateToken(user);
    return {token,user};

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  login
};
