import { DeleteResult } from "typeorm";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import FindProductByIdService from "./FindProductByIdService";

export default class DeleteProductService {
    
    public async execute(id: number): Promise<DeleteResult> {
        const productRepository = new ProductRepository();

        //verifica se o produto existe
        const findProductByIdService = new FindProductByIdService();
        await findProductByIdService.execute(id);

        //deleta 
        const result = await productRepository.delete(id);

    return result;
    }
    
}