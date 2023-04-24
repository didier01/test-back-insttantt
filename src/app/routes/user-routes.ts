import { Router } from "express";

import { getUsers, postUser, getUserId, updateUser } from '../controllers/user-controller';

const userRouter = Router();

// User Routes
userRouter.get(
  "/users",
  getUsers
);
userRouter.get(
  "/user/:id",
  getUserId
);

userRouter.post(
  "/user",
  postUser
);

userRouter.put("/user/:id", updateUser);

export default userRouter;