const usersRouter = require("./users");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");
const cartRouter = require("./cart");
const orderRouter = require("./order");
const orderdetailRouter = require("./orderdetail");
function route(app) {
  app.use("/auth", authRouter);
  app.use("/cart", cartRouter);
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/orders", orderRouter);
  app.use("/orderdetails", orderdetailRouter);
}

module.exports = route;
