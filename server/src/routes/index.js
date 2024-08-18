const authRouter = require("./auth");
const cartRouter = require("./cart");
const usersRouter = require("./users");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const manufacturerRouter = require("./manufacturer");
const valueAttributeRouter = require("./valueAttribute");
const orderRouter = require("./order");
const orderdetailRouter = require("./orderdetail");

function route(app) {
  app.use("/auth", authRouter);
  app.use("/cart", cartRouter);
  app.use("/users", usersRouter);
  app.use("/orders", orderRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/orderdetails", orderdetailRouter);
  app.use("/manufacturer", manufacturerRouter);
  app.use("/valueAttribute", valueAttributeRouter);
}

module.exports = route;
