import { DeleteResult } from "typeorm";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from
"../infra/typeorm/repositories/ClientRepository";
import FindByIdService from "./FindByIdService";

export default class DeleteClientService {
    
    public async execute(id: number): Promise<DeleteResult> {
        const clientRepository = new ClientRepository();

        //verifica se o cliente existe
        const findByIdService = new FindByIdService();
        await findByIdService.execute(id);

        //deleta 
        const result = await clientRepository.delete(id);

    return result;
    }
    
}