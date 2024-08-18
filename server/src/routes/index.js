const usersRouter = require("./users");
const productsRouter = require("./products");
const productImgsRouter = require("./productImgs");
const commentRouter = require("./comments");
const categoriesRouter = require("./categories");
const authRouter = require("./auth");
const cartRouter = require("./cart");
const attributeRouter = require("./attribute");
function route(app) {
  app.use("/auth", authRouter);
  app.use("/cart", cartRouter);
  app.use("/users", usersRouter);
  app.use("/products", productsRouter);
  app.use("/productimgs", productImgsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/comments", commentRouter);
  app.use("/attribute", attributeRouter);


}

module.exports = route;
