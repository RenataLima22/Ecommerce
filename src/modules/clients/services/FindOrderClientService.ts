import AppError from "../../../shared/errors/AppErrors";
import Client from "../infra/typeorm/entities/Client";
import OrderClientRepository from "../infra/typeorm/repositories/OrderClientRepository";

//RF16 - Deve ser possível buscar todos os pedidos de um cliente
export default class FindOrderClientService {
  public async execute(id: number): Promise<Client> {
    const categoryRepository = new OrderClientRepository();

    const client = await categoryRepository.findById(id);

    if (!client) {
      throw new AppError("Este cliente não existe.");
    }

    return client;
  }
}