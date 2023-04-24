"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth-controller");
const authRouter = express_1.Router();
// Auth Routes
// authRouter.get("/auth/:id",getUserId);
authRouter.post("/auth/login", auth_controller_1.login);
authRouter.post("/auth/refreshToken", auth_controller_1.refreshToken);
exports.default = authRouter;
//# sourceMappingURL=auth-routes.js.map