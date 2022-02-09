import AppErrors from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from
"../infra/typeorm/repositories/ClientRepository";

export default class FindByIdService {
    
    public async execute(id : number): Promise<Client> {
        const clientRepository = new ClientRepository();
        const client = await clientRepository.findID(id);

        if(!client){
            throw new AppErrors("Cliente não encontrado");//error handler
        }

    return client;
    }
    
}