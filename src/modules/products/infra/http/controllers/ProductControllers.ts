import { Request, Response } from "express";

import CreateProductService from
"../../../services/CreateProductService";
import FindProductByIdService from "../../../services/FindProductByIdService";
import ListProductService from "../../../services/ListProductService";
import UpdateProductService from "../../../services/UpdateProductService";

class ProductController {

    async create(request: Request, response: Response) {
        const data = request.body;
        const createProductService = new CreateProductService();
        const product = await createProductService.execute(data);
    return response.json(product);
    }

    async list(request: Request, response: Response) {

        const listProductService = new ListProductService();
        const product = await listProductService.execute();

    return response.json(product);
    }

    async findID(request: Request, response: Response) {
        const {id} = request.params;

        const findProductService = new FindProductByIdService();
        const product = await findProductService.execute(parseInt(id));

    return response.json(product);
    }

    async update(request: Request, response: Response) {
        const data = request.body;

        const {id} = request.params;

        //operador rest, pega um objeto e colocou conteúdo dentro
        const toUpdate = {
            ...data,
            id : Number(id),
        }

        const updateProductService = new UpdateProductService();
        const product = await updateProductService.execute(toUpdate);

    return response.json(product);
    }

}

export default new ProductController();