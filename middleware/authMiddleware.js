import User from "../Model/user.js"
;
exports.userAuth = async ({email}) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("unauthorized");
    }
   
    return user;
}