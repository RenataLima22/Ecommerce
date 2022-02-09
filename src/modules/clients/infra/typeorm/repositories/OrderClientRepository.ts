import { getRepository, Repository } from "typeorm";
import IOrderClientRepository from "../../../repositories/IOrderClientRepository";
import Client from "../entities/Client";


export default class OrderClientRepository implements IOrderClientRepository {
  private ormRepository: Repository<Client>;

  constructor() {
    this.ormRepository = getRepository(Client);
  }

  async findById(id: number): Promise<Client | undefined> {
    return (
      this.ormRepository.query(`
        Select pedidos.* 
        from clientes  
        left join pedidos  on clientes.id = pedidos.cliente_id   
        where pedidos.cliente_id = ?;`, [id])
        
    );
  } 
}