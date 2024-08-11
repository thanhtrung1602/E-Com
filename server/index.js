const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const route = require("./src/routes");
const cookieParse = require("cookie-parser");

const corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParse());

route(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}`)
);
