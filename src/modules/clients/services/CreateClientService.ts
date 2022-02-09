import AppError from "../../../shared/errors/AppErrors";
import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import FindByIdService from "./FindByIdService";
import ListClientService from "./ListClientService";

export default class CreateClientService {
    
    public async execute(data: IClientDTO): Promise<Client> {
        const clientRepository = new ClientRepository();
        
        const listClientsService = new ListClientService();

        const listaClientes = await listClientsService.execute();

        //Gera uma lista dos CPFs dos clientes já cadastrados
        const listaCPF= listaClientes.map(function (GetCPF) {
           return  GetCPF.cpf;
        });

        //RF04 -Não pode ter dois clientes com o mesmo CPF
        for (var i=0; i<listaCPF.length; i++) {
            if (listaCPF) {
                if (listaCPF[i] === data.cpf) {
                    throw new AppError("Este CPF já foi cadastrado!");
                }
            }
        }

        if (data.id) {
            throw new AppError("ID não deve ser enviado no cadastro");
        }

        const client = await clientRepository.create(data);
    
        return client;
    }
    
}