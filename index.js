import express from "express";
import mongoose from "mongoose";

const PORT = 5000;
const DB_URL = `mongodb+srv://Gray1991:z1x2c3v4@node.hs7xi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("Сервер работает");
});

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("server started on " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
