const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status.json({
    status: true,
    message: "get api successful",
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "data was not found!",
  });
});

app.use((err, req, res, next) => {
  return res.status(500).json({
    status: false,
    message: "",
  });
});

app.listen(port, () => {
  console.log("listening on port", port);
});
