"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const userRouter = express_1.Router();
// User Routes
userRouter.get("/users", user_controller_1.getUsers);
userRouter.get("/user/:id", user_controller_1.getUserId);
userRouter.post("/user", user_controller_1.postUser);
userRouter.put("/user/:id", user_controller_1.updateUser);
exports.default = userRouter;
//# sourceMappingURL=user-routes.js.map