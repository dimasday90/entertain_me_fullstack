const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const express = require("express");
const app = express();
const PORT = 3002;
const dbName = "entertainme";
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const client = new MongoClient(url, { useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client
  .connect()
  .then(config => {
    const db = client.db(dbName);

    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    app.use(routes);
    app.use(errorHandler);
  })
  .catch(console.log);

app.listen(PORT, () => {
  console.log(
    `Koka kola untuk temen popcorn, tambah Rp. ${PORT.toLocaleString()}`
  );
});
