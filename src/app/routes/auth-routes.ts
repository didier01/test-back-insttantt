import { Router } from "express";
import { login, refreshToken } from '../controllers/auth-controller';


const authRouter = Router();

// Auth Routes

// authRouter.get("/auth/:id",getUserId);
authRouter.post("/auth/login", login );
authRouter.post("/auth/refreshToken", refreshToken );

export default authRouter;