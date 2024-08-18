const authRouter = require("./auth");
const cartRouter = require("./cart");
const usersRouter = require("./users");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const manufacturerRouter = require("./manufacturer");
const valueAttributeRouter = require("./valueAttribute");

function route(app) {
  app.use("/auth", authRouter);
  app.use("/cart", cartRouter);
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/manufacturer", manufacturerRouter);
  app.use("/valueAttribute", valueAttributeRouter);
}

module.exports = route;
