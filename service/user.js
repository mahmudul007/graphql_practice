const User = require("../Model/user");

const createUser = async (name, email, password) => {
  try {
    const userData = await User.create({
      name,
      email,
      password,
    });
    return userData;
  } catch (error) {
    console.log(error);
  }
};

const getUser=  async ()=>{
    try {
        const userData = await User.find();
        console.log(userData);
        return userData;
    } catch (error) {
        console.log(error);
    }
  
}
const getUserById=  async (id)=>{
  try {
    const userData = await User.findById(id);
    return userData;
  } catch (error) {
    console.log(error);
    
  }
}
const updateUser=  async (id,name,email,password)=>{
  try {
    const updateUser = await User.findByIdAndUpdate (id,{name,email,password});
    console.log(updateUser);
    return updateUser;
    
  } catch (error) {
    
  }
}

const deleteUser=  async (id)=>{
  try {
    const deleteUser = await User.findByIdAndDelete(id);

    if (!deleteUser) {
      throw new Error("User not found");
    }
    const message = {
     
      message:"User deleted successfully",
      result:deleteUser
    };
    return message;
    
  } catch (error) {
    return message={
      message:"User not found",
     
    }
    
  }
}


module.exports ={ createUser , getUser,getUserById,updateUser,deleteUser};
