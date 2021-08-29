import express from "express";
import controllers from "../controllers/products"

const productsRouter = express.Router();

productsRouter.get("/products", controllers.getProducts);

productsRouter.post("/products", controllers.addProduct);

productsRouter.delete("/products:id", controllers.deleteProduct);

productsRouter.put("/products:id", controllers.updateUser)

productsRouter.get("/products:id", controllers.getProductById)

export default productsRouter;