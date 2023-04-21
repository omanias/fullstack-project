const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./database");

app.use(cors());
app.use(express.json());

app.get("/data", (req, res) => {
  connection.query("SELECT * FROM pedidos_neptuno", (err, rows, fields) => {
    if (err) {
      console.error("Error al realizar la consulta:", err);
      res.status(500).send("Error al realizar la consulta");
      return;
    }

    res.json(rows);
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
