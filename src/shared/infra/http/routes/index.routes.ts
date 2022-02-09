import { Router } from "express";
import categoriesRoutes from "../../../../modules/Categories/infra/http/routes/categories.routes";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import productsRoutes from "../../../../modules/products/infra/http/routes/products.routes";
import ordersRoutes from "../../../../modules/orders/infra/http/routes/orders.routes";

const routes = Router();

routes.use("/clientes", clientsRoutes);

routes.use("/categorias", categoriesRoutes);

routes.use("/produtos", productsRoutes);

routes.use("/pedidos", ordersRoutes);

export default routes; 