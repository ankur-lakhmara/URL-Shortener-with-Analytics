const express = require("express");
const urlRoute = require("./routes/url");
const { connectToMongoDB } = require("./connect");
const app = express();

connectToMongoDB("mongodb://127.0.0.1:27017/urlShortener")
  .then(() => console.log("connected to mongoDB"))
  .catch((err) => console.log("error while connecting to DB"));
app.use(express.json());

app.use("/url", urlRoute);

const PORT = 8001;
app.listen(PORT, () => {
  console.log("server is listening on port " + PORT);
});
