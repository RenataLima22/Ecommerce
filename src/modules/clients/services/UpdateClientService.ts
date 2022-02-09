import AppErrors from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from
"../infra/typeorm/repositories/ClientRepository";
import FindByIdService from "./FindByIdService";

export default class UpdateClientService {
    
    public async execute(data: IClientDTO): Promise<Client> {

        const clientRepository = new ClientRepository();
        const findID = new FindByIdService();

        if(!data.id){
            throw new AppErrors("Atualização precisa do id do cliente.");
        }

        await findID.execute(data.id);

        const client = await clientRepository.update(data);
        
        return client;
    }
    
}