import { Request, Response } from "express";

import CreateCategoryService from "../../../services/CreateCategoryService";
import DeleteCategoryService from "../../../services/DeleteCategoryService";
import FindCategoryByIdService from "../../../services/FindCategoryByIdService";
import ListCategoryService from "../../../services/ListCategoryService";
import UpdateCategoryService from "../../../services/UpdateCategoryService";

class CategoriesController {

    async create(request: Request, response: Response) {
        const data = request.body;
        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute(data);
    return response.json(category);
    }

    async list(request: Request, response: Response) {

        const listCategoryService = new ListCategoryService();
        const category = await listCategoryService.execute();

    return response.json(category);
    }

    async findID(request: Request, response: Response) {
        const {id} = request.params;

        const findCategoryService = new FindCategoryByIdService();
        const category = await findCategoryService.execute(parseInt(id));

    return response.json(category);
    }

    async update(request: Request, response: Response) {
        const data = request.body;

        const {id} = request.params;

        //operador rest, pega um objeto e colocou conteúdo dentro
        const toUpdate = {
            ...data,
            id : Number(id),
        }

        const updateCategoryService = new UpdateCategoryService();
        const category = await updateCategoryService.execute(toUpdate);

    return response.json(category);
    }

    async delete(request: Request, response: Response) {
        const {id} = request.params;

        const deleteCategoryService = new DeleteCategoryService();
        const result = await deleteCategoryService.execute(parseInt(id));

    return response.json(result);
    }
}

export default new CategoriesController();