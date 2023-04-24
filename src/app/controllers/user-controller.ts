import { Request, Response } from "express";
import UserModel  from '../models/user-model';
import { generateJWT, parseJwt } from '../helpers/generateJWT';


export const getUsers = async (req: Request, res: Response) => {
  try {

    const users = await UserModel.find();
    if (users.length == 0) {
      return res.status(400).json({
        msg: `Lo sentimos no se encontraron datos`,
      });
    }

    return res.json({
      msg: "GetUsers",
      users,
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

export const getUserId = async (req: Request, res: Response) => {
  try {
    
    let id = req.params.id;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(400).json({
        msg: `El usuario con el id: ${id} no existe!!!`,
      });
    }
    return res.json({
      msg: "GetUserId",
      user,
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};

export const postUser = async (req: Request, res: Response) => {
    try {
        let { body } = req;

        const userExist: any = await UserModel.findOne({
            email: body.email
        });
    
        if (userExist) {
          return res.status(400).json({
            msg: "Este correo no está disponible",
            errors: "error",
          });
        }
        if (userExist.documentNumber == body.documentNumber) {
          return res.status(400).json({
            msg: "El número de identificación debes ser único",
            errors: "error",
          });
        }
          
        // Save user
        let userToSave = new UserModel(body);
        await userToSave.save();
        const token = await generateJWT(userToSave._id, "10m");
        const expiresIn = await parseJwt(token);
        return res.status(201).json({
            msg: "Usuario creado exitosamente",
            user: userToSave,
            token,
            expiresIn
        });
    } catch (error) {
        console.log("error");
        return res.status(500).json({
        msg: "Error en el servidor",
        });
    }
};

export const updateUser = async (req: Request, res: Response) => {

  try {
    let id = req.params.id;
    let { body } = req;
    const userExist = await UserModel.findByIdAndUpdate(id,body);
    if (!userExist) {
      return res.status(400).json({
        msg: `No existe un usuario con el id ${id}`,
      });
    }
  
    return res.json({
      msg: "putUser actualizado",
      userExist,
    });
  } catch (error) {
    console.log("error");
    return res.status(500).json({
      msg: "Error en el servidor",
    });
  }
};


