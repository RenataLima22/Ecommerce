import { DeleteResult } from "typeorm";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import FindCategoryByIdService from "./FindCategoryByIdService";

export default class DeleteCategoryService {
    
    public async execute(id: number): Promise<DeleteResult> {
        const categoryRepository = new CategoryRepository();

        //verifica se o cliente existe
        const findCategoryByIdService = new FindCategoryByIdService();
        await findCategoryByIdService.execute(id);

        //deleta 
        const result = await categoryRepository.delete(id);

    return result;
    }
    
}