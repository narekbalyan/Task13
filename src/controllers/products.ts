import {Response, Request} from "express";
import services from "../services/products";

async function getProducts(req: Request, res: Response) {
    res.send(await services.getProducts());
}

async function addProduct(req: Request, res: Response) {
    await services.addProduct(req.body)
    res.send("Product added");
}

async function deleteProduct(req: Request, res: Response) {
    await services.deleteProduct(req.params.id)
    res.send("Product deleted");
}

async function updateUser(req: Request, res: Response) {
    await services.updateProduct(req.params.id, req.body);
    res.send("User updated");
}

async function getProductById(req: Request, res: Response) {
    res.send(await services.getProductById(req.params.id));
}

export default {getProducts, addProduct, deleteProduct, updateUser, getProductById}