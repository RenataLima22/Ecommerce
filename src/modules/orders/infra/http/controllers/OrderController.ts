import { Request, Response } from "express";
import FindOrderByIdService from "../../../services/FindOrderByIdService";
import CreateOrderService from "../../../services/CreateOrderService";
import FindOrderClientService from "../../../../clients/services/FindOrderClientService";

class OrderController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createOrderService = new CreateOrderService();

    const product = await createOrderService.execute(data);

    return response.json(product);
  }

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindOrderByIdService();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }

  async findByClientId(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrderService = new FindOrderClientService();

    const product = await findOrderService.execute(Number(id));

    return response.json(product);
  }
}

export default new OrderController();