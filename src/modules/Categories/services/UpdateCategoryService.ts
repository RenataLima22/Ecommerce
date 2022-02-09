import AppErrors from "../../../shared/errors/AppErrors";
import ICategoryDTO from "../dtos/ICategoryDTO";
import Category from "../infra/typeorm/entities/Category";
import CategoryRepository from "../infra/typeorm/repositories/CategoryRepository";
import FindCategoryByIdService from "./FindCategoryByIdService";

export default class UpdateCategoryService {
    
    public async execute(data: ICategoryDTO): Promise<Category> {

        const categoryRepository = new CategoryRepository();
        const findID = new FindCategoryByIdService();

        if(!data.id){
            throw new AppErrors("Atualização precisa do id da categoria.");
        }
        console.log(data)
        await findID.execute(data.id);  

        const category = await categoryRepository.update(data);
        
        return category;
    }
    
}