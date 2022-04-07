import express from "express";

const PORT = 5000;

const app = express();

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json("server working123");
});

app.listen(PORT, () => console.log("server started on " + PORT));
