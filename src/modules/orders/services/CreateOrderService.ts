import AppError from "../../../shared/errors/AppErrors";
import Product from "../../products/infra/typeorm/entities/Product";
import FindProductByIdService from "../../products/services/FindProductByIdService";
import UpdateProductService from "../../products/services/UpdateProductService";
import IOrderDTO from "../dtos/IOrderDTO";
import Order from "../infra/typeorm/entities/Order";
import OrderRepository from "../infra/typeorm/repositories/OrderRepository";

export default class CreateOrderService {
  public async execute(data: IOrderDTO): Promise<Order> {
    const orderRepository = new OrderRepository();
    const FindProduct = new FindProductByIdService;
    const UpdateProduct = new UpdateProductService;
    
    const productList: Array<Product> = [];
    
    let total = 0;

    //RF20 - Um pedido deve ter pelo menos um produto
    //RF21 - Um pedido pode ter vários produtos (só não pode ser igual a zero)
    console.log(data.pedido_produtos)
    if (data.pedido_produtos.length === 0) {
      throw new AppError("É necessário que pelo menos um produto seja inserido no pedido.");
    }


    for (let i = 0; i < data.pedido_produtos.length; i++) {

      //cria uma lista com os produtos comprados para cálculo do total  
      productList[i] = await FindProduct.execute(data.pedido_produtos[i].produto_id);

      //RF14 - Deve ser informado a quantidade de cada produto ao fazer o pedido;
      if (data.pedido_produtos[i].quantidade <= 0) {
        throw new AppError("A quantidade deve ser informada.");
      }

      //verifica quantidade e retira do estoque se estiver disponível
      if (data.pedido_produtos[i].quantidade <= productList[i].quantidade) {
        productList[i].quantidade -= data.pedido_produtos[i].quantidade;
        await UpdateProduct.execute(productList[i]);
      } else if (data.pedido_produtos[i].quantidade > productList[i].quantidade){
        //RF17 - Um pedido não pode ser finalizado se algum dos produtos estiver sem estoque necessário;
        throw new AppError("Não há estoque suficiente do produto.");
      }

      //RF22 - O valor do pedido deve ser calculado pelo sistema;
      total += productList[i].preco * data.pedido_produtos[i].quantidade;
      console.log(data.valor)
    }
    data.valor = Number(total.toFixed(2))
    
    const order = await orderRepository.create(data);

    return order;
  }
}