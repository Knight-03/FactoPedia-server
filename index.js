const mongoose = require("mongoose");
const dotenv = require("dotenv");


process.on("uncaughtException", (err) => {
  console.log("unhandled exception! ❌ ");
  console.log(err.name, err.message);
  process.exit(1);
});


dotenv.config({ path: "./config.env" });
const app = require("./app");


const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);


mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB connection established");
  });


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});


process.on("unhandledRejection", (err) => {
  console.log("unhandled Rejection! 🙊 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});