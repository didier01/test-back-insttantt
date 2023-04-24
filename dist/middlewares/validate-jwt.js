"use strict";
// import { validationResult } from "express-validator";
// import { Response, Request } from "express";
// import jwt from "jsonwebtoken";
// import User from "../models/user-model";
// export const validateJwt = async (req: Request, res: Response, next: any) => {
//   const bearerToken = req.header("Authorization");
//   if (!bearerToken) {
//     return res.status(401).json({
//       msg: "No existe token en la petición",
//     });
//   }
//   const bearer = bearerToken.split(" ");
//   const token = bearer[1];
//   try {
//     const secret: any = process.env.SECRET_KEY || "lmndtv2022";
//     const payload: any = jwt.verify(token, secret);
//     const user: any = await User.findByPk(payload.uid);
//     // Verificar si el usuario existe
//     if (!user) {
//       return res.status(401).json({
//         msg: "No tienes acceso a esta petición",
//       });
//     }
//     // Verificar si el usuario esta eliminado
//     if (!user.active) {
//       return res.status(401).json({
//         msg: "No tienes acceso a esta petición",
//       });
//     }
//     // req.authUser = user;
//     next();
//   } catch (error) {
//     return res.status(401).json({
//       msg: "No tienes acceso a esta petición",
//     });
//   }
// };
//# sourceMappingURL=validate-jwt.js.map