const { Pool } = require("pg");
const express = require("express");
const app = express();
const secrets = require("./secrets.js");
const cors = require('cors')

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "book_store",
    password: secrets.dbPassword,
    port: 5432,
  });

  app.use(cors())
  app.use('/public', express.static('public'))

  app.get("/books", (req, res) => {
    pool
      .query("SELECT * FROM books")
      .then((result) => res.json(result.rows))
      .catch((err) => res.json(err, 404));
  });







app.listen(5000, function () {
    console.log("Server is listening on port 5000. Ready to accept requests!");
  });