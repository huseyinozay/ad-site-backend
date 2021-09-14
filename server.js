const express = require("express");
const app = express();

const db = require("./config/database");

const PORT = process.env.PORT || 3000;

//Test DB
db.authenticate()
  .then(() => console.log("Database connected...🥳🥳"))
  .catch((err) => console.log("Error: " + err));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
