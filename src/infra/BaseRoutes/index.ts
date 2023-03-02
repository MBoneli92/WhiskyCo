import { Router } from "express";
import userRoutes from "../../routes/routesUser";
import categoryRoutes from "../../routes/routesCategory";
import productRoutes from "../../routes/routesProduct";
import authRoutes from "../../routes/routesAuth";
const routes = Router();

routes.use(userRoutes);
routes.use(categoryRoutes);
routes.use(productRoutes);
routes.use(authRoutes);

export default routes;