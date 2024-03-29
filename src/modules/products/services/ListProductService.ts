import Product from "../infra/typeorm/entities/Product";
import ProductRepository from
"../infra/typeorm/repositories/ProductRepository";

export default class CreateProductService {
    
    public async execute(): Promise<Product[]> {
        const productRepository = new ProductRepository();
        const product = await productRepository.list();
    return product;
    }
    
}