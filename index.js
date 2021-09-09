const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// serve the public directory as a static content here
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
