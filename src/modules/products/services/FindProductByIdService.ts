import AppErrors from "../../../shared/errors/AppErrors";
import Product from "../infra/typeorm/entities/Product";
import ProductRepository from
"../infra/typeorm/repositories/ProductRepository";

export default class FindProductByIdService {
    
    public async execute(id : number): Promise<Product> {
        const productRepository = new ProductRepository();
        const product = await productRepository.findID(id);

        if(!product){
            throw new AppErrors("Produto não encontrado");//error handler
        }

    return product;
    }
    
}