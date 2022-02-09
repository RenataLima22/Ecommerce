import Client from "../infra/typeorm/entities/Client";

export default interface IOrderClientRepository {

  findById(id: number): Promise<Client | undefined>;

}