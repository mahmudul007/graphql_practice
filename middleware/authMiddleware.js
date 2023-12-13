const User = require("../Model/user");
exports.userAuth = async ({email}) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("unauthorized");
    }
   
    return user;
}