import { Request, Response } from "express";

import CreateClientService from
"../../../services/CreateClientService";
import DeleteClientService from "../../../services/DeleteClientService";
import FindByIdService from "../../../services/FindByIdService";
import ListClientService from "../../../services/ListClientService";
import UpdateClientService from "../../../services/UpdateClientService";

class ClientsController {

    async create(request: Request, response: Response) {
        const data = request.body;
        const createClientService = new CreateClientService();
        const client = await createClientService.execute(data);
    return response.json(client);
    }

    async list(request: Request, response: Response) {

        const listClientService = new ListClientService();
        const client = await listClientService.execute();

    return response.json(client);
    }

    async findID(request: Request, response: Response) {
        const {id} = request.params;

        const findClientService = new FindByIdService();
        const client = await findClientService.execute(parseInt(id));

    return response.json(client);
    }

    async update(request: Request, response: Response) {
        const data = request.body;

        const {id} = request.params;

        //operador rest, pega um objeto e colocou conteúdo dentro
        const toUpdate = {
            ...data,
            id : Number(id),
        }

        const updateClientService = new UpdateClientService();
        const client = await updateClientService.execute(toUpdate);

    return response.json(client);
    }

    async delete(request: Request, response: Response) {
        const {id} = request.params;

        const deleteClientService = new DeleteClientService();
        const result = await deleteClientService.execute(parseInt(id));

    return response.json(result);
    }
}

export default new ClientsController();