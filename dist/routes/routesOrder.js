"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerOrder_1 = __importDefault(require("../controllers/controllerOrder"));
const auth_1 = __importDefault(require("../middlewares/auth"));
const routes = (0, express_1.Router)();
routes.post("/order", auth_1.default, controllerOrder_1.default.create);
routes.get("/order", auth_1.default, controllerOrder_1.default.findAll);
routes.get("/order/:id", auth_1.default, controllerOrder_1.default.findOne);
routes.put("/order/:id", auth_1.default, controllerOrder_1.default.update);
routes.delete("/order/:id", auth_1.default, controllerOrder_1.default.delete);
exports.default = routes;
