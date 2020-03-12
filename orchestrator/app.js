const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Travel ke hiburan Anda dalam ${PORT} ms`);
});
