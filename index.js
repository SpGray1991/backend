import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL = `mongodb+srv://Gray1991:z1x2c3v4@node.hs7xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("server started on " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
