const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
var cors = require("cors");

app.use(cors());

let lastIndex = 1;

let database = [
  { id: lastIndex++, latitude: 60, longitude: 70 },
  { id: lastIndex++, latitude: 40, longitude: 80 },
];

app.use(express.json());

app.use(express.static("public"));
app.get("/api/locations", function (req, res) {
  res.json(database);
});

// GET http://localhost:8080/customers/99
app.get("/api/locations/:myId([0-9]+)", (req, res) => {
  let id = req.params.myId;

  // etsi taulukosta henkilö joka id mätsää annetun kanssa
  let location = database.find((location) => location.id == id);

  if (location != null) {
    res.send(location);
  } else {
    res.status(404).end();
  }
});

// DELETE http://localhost:8080/customers/99
app.delete("/api/locations/:myId([0-9]+)", (req, res) => {
  let id = req.params.myId;
  let newDB = database.filter((location) => location.id != id);
  if (newDB.length != database.length) {
    database = newDB;
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

// POST http://localhost:8080/customers/
app.post("/api/locations/", (req, res) => {
  let body = req.body;
  body.id = lastIndex++;
  database.push(body);
  res.status(201).send(body);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
