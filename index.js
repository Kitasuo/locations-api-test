const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var cors = require("cors");

app.use(cors());

let database = [
  { id: 1, latitude: 60, longitude: 70 },
  { id: 2, latitude: 40, longitude: 80 },
];

app.use(express.static("public"));
app.get("/api/locations", function (req, res) {
  res.json(database);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
