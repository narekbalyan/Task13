import "reflect-metadata";
import {getConnection, getRepository} from "typeorm";
import {Product} from "../entity/products"

async function getProducts() {
    const products = await getRepository(Product).find()
    return products;
}

async function addProduct(product) {
    const productToCreate = await getRepository(Product).create(product);
    await getRepository(Product).save(productToCreate);
}

async function deleteProduct(id) {
    await getRepository(Product).delete(id);
}

async function updateProduct(id, product) {
    const productToUpdate = await getRepository(Product).findOne(id);
    getRepository(Product).merge(productToUpdate, product);
    await getRepository(Product).save(productToUpdate);
}

async function getProductById(id) {
    return await getRepository(Product).findOne(id);
}

export default {getProducts, addProduct, deleteProduct, updateProduct, getProductById}