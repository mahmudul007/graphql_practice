const mongoose = require("mongoose");
const uri =
  "mongodb+srv://airvila:oW2Zw26tOa6WawKa@cluster0.teo92.mongodb.net/BookingEngine?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(Error, err.message);
  });
