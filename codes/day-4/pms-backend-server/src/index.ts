import { ProductManager } from "./manager/productmanager";
import { Product } from "./models/product";

const newProduct: Product = {
    name: 'dell xps',
    code: 'dell-1234',
    price: 10000,
    description: 'new product from dell',
    imagePath: '',
    releaseDate: '1/1/2020',
    rating: 4
}

const manager = new ProductManager()
manager
    .addProduct(newProduct)
    .then(
        () => {
            manager
                .fetchAllProducts()
                .then(
                    (data) => {
                        console.log(data)
                    },
                    (e) => {
                        console.log(e)
                    }
                )
        }
        ,
        (e) => console.log(e)
    )