import express, { Application } from "express";
// import router from "../routes/user-route";
import cors from "cors";

import {conection} from "../database/connection";
import userRouter from '../routes/user-routes';
import authRouter from '../routes/auth-routes';

class Server {
  private app: Application;
  private port: string;
 
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8080";

    // Metodo iniciales
    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await conection();
      console.log("database online");
    } catch (error) {
      throw new Error("error");
    }
  }

  middlewares() {
    // Cors
    this.app.use(cors());
    // Lectura del body
    this.app.use(express.json());
    // Carpeta publica
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api", userRouter);
    this.app.use("/api", authRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto: ", this.port);
    });
  }

}

export default Server;
