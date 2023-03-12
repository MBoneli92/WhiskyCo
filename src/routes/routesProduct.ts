import { Router } from "express";
import controller from "../controllers/controllerProduct";
import isAdmin from "../middlewares/isAdmin";

const routes = Router();

routes.post("/product", controller.create);
routes.get("/product", controller.findAll);
routes.get("/product/:name", controller.find);
routes.put("/product/:id", isAdmin, controller.update);
routes.delete("/product/:id", isAdmin, controller.delete);

export default routes;
