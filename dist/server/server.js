"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import router from "../routes/user-route";
const cors_1 = __importDefault(require("cors"));
const connection_1 = require("../database/connection");
const user_routes_1 = __importDefault(require("../routes/user-routes"));
const auth_routes_1 = __importDefault(require("../routes/auth-routes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = process.env.PORT || "8080";
        // Metodo iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.conection();
                console.log("database online");
            }
            catch (error) {
                throw new Error("error");
            }
        });
    }
    middlewares() {
        // Cors
        this.app.use(cors_1.default());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta publica
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use("/api", user_routes_1.default);
        this.app.use("/api", auth_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto: ", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map