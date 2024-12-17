const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conn = require("./database/db");

//view engine EJS
app.set("view engine", "ejs");

//static
app.use(express.static("public"));

//Bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DATABASE
conn
  .authenticate()
  .then(() => {
    console.log("Conexão Feita com Sucesso");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3000");
});
