const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const port = 4000;

const dbconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cheekati@99",
  database: "test",
});

dbconnection.connect();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// dbconnection.query("SELECT 1 + 3 AS solution", (err, rows, fields) => {
//   if (err) throw err;

//   console.log("The solution is: ", rows[0].solution);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.json("hey this is from backend...");
});

app.get("/books", (req, res) => {
  const q = "select * from books";
  dbconnection.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const q = "insert into books(`title`, `description` ,`cover`) values(?)";
  const values = [req.body.title, req.body.description, req.body.cover];
  dbconnection.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created");
  });
});

//dbconnection.end();
