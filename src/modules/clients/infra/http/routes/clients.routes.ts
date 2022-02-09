import { Router } from "express";
import ClientsController from "../controllers/ClientsController";
import OrderClientController from "../controllers/OrderClientController";

const routes = Router();

routes.post("/", ClientsController.create);

routes.get("/", ClientsController.list);

routes.get("/:id", ClientsController.findID);

routes.put("/:id", ClientsController.update);

routes.delete("/:id", ClientsController.delete);

routes.get("/:id/pedidos", OrderClientController.findById);

export default routes;