import { Router } from "express";
import ProductController from "../controllers/ProductControllers";

const routes = Router();

routes.post("/", ProductController.create);

routes.get("/", ProductController.list);

routes.get("/:id", ProductController.findID);

routes.put("/:id", ProductController.update);

export default routes;