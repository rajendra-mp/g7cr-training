import { readFile, writeFile } from "fs";
import { promisify } from 'util'
import { Product } from "../models/product";

const readFilePromisified = promisify(readFile)
const writeFilePromisified = promisify(writeFile)

export class ProductDao {
    async writeData(data: Product[]): Promise<void> {
        return writeFilePromisified('./data/products.json', JSON.stringify(data))
    }
    async readData(): Promise<Product[]> {
        const data = await readFilePromisified('./data/products.json', { encoding: 'utf-8' })
        return <Product[]>JSON.parse(data)
    }
}

