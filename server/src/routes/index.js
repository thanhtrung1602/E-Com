const usersRouter = require("./users");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");
const cartRouter = require("./cart");
const manufacturerRouter = require("./manufacturer");
function route(app) {
  app.use("/auth", authRouter);
  app.use("/cart", cartRouter);
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/manufacturer", manufacturerRouter);
}

module.exports = route;
