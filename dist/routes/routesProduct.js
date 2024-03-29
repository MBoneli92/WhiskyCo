"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerProduct_1 = __importDefault(require("../controllers/controllerProduct"));
const isAdmin_1 = __importDefault(require("../middlewares/isAdmin"));
const createProd_1 = __importDefault(require("../validations/Product/createProd"));
const updateProd_1 = __importDefault(require("../validations/Product/updateProd"));
const routes = (0, express_1.Router)();
routes.post("/product", createProd_1.default, controllerProduct_1.default.create);
routes.get("/product", controllerProduct_1.default.findAll);
routes.get("/product/:name", controllerProduct_1.default.find);
routes.put("/product/:id", isAdmin_1.default, updateProd_1.default, controllerProduct_1.default.update);
routes.delete("/product/:id", isAdmin_1.default, controllerProduct_1.default.delete);
exports.default = routes;
