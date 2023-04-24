



import { Request, Response } from "express";
import UserModel  from '../models/user-model'; 
import { generateJWT, parseJwt } from '../helpers/generateJWT';
import jwt from 'jsonwebtoken';


export const login = async (req: Request, res: Response) => {
    try {
      const { user, password } = req.body;
      const userExist: any = await UserModel.findOne({
          email: user, phoneNumber : password
      });
  
      if (!userExist) {
        return res.status(400).json({
          msg: "El Correo y/o Contraseña que ingresaste son incorrectos",
          errors: "error",
        });
      }

      const token = await generateJWT(userExist._id, "10m");
      const expiresIn = await parseJwt(token);
  
      return res.json({
        msg: "ok",
        token,
        expiresIn,
        user: userExist,
      });
    } catch (error) {
      console.log("error");
      return res.status(500).json({
        msg: "Lo sentimos hubo un error en el servidor",
      });
    }
  };

  export const refreshToken = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;

        const secret: any = process.env.SECRET_KEY || "insttantt2023";
        const payload: any = jwt.verify(token, secret);
        const user: any = await UserModel.findById(payload.uid);

      if (!user) {
        return res.status(404).json({
          msg: `El usuario no existe!!!`,
        });
      }
      const newToken = await generateJWT(user._id, "10m");
      const expiresIn = await parseJwt(newToken);
  
      return res.json({
        msg: "ok",
        token: newToken,
        expiresIn,
        user,
      });
    } catch (error) {
      console.log("error");
      return res.status(500).json({
        msg: "Error en el servidor",
      });
    }
  };