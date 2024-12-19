const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
const PORT = 3000;

const replicas = process.env.APP_NAME;

app.use("/", (req, res, next) => {
  console.log("inside first middleware");

  next();
});

app.use("/", (req, res) => {
  console.log("inside second middleware");

  res.sendFile(path.join(__dirname, "index.html"));
  console.log(`Request Served by Node ${replicas}`);
});

app.listen(PORT, () => {
  console.log(`${replicas} is listening on port ${PORT}`);
});
