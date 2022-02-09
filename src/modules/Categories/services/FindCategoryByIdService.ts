import AppErrors from "../../../shared/errors/AppErrors";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";

export default class FindCategoryByIdService {
    
    public async execute(id : number): Promise<Category | undefined> {
        const categoryRepository = new CategoryRepository();
        const category = await categoryRepository.findID(id);

        if(!category){
            throw new AppErrors("Categoria não encontrada.");//error handler
        }

    return category;
    }
    
}