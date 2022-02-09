import { Request, Response } from "express";
import AppError from "../../../../../shared/errors/AppErrors";

import FindOrderClientService from "../../../services/FindOrderClientService";

class OrdersByClientController {

  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrdersByClientService = new FindOrderClientService();

    const client = await findOrdersByClientService.execute(Number(id));

    return response.json(client);
  }

}

export default new OrdersByClientController();