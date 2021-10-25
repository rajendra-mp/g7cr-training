import { ProductDao } from "../dao/productdao";
import { Product } from "../models/product";

export class ProductManager {

    async addProduct(product: Product) {
        const productDao = new ProductDao()
        const products = await productDao.readData()

        if (!products.find((p: Product) => p.code === product.code)) {
            products.push(product)
            productDao
                .writeData(products)
                .catch(e => console.log(e))
        }
    }
    // updateProduct(productId: number, product: Product): Product {
    //     return null
    // }
    // deleteProduct(productId: number): Product {
    //     return null
    // }
    fetchAllProducts(): Promise<Product[]> {
        const dao = new ProductDao()
        return dao.readData()
    }
    // fetchProductById(productId: number): Product {
    //     return null
    // }
    // fetchProductsByName(productName: string): Product[] {
    //     return null
    // }
}