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
exports.updateUser = exports.postUser = exports.getUserId = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user-model"));
const generateJWT_1 = require("../helpers/generateJWT");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find();
        if (users.length == 0) {
            return res.status(400).json({
                msg: `Lo sentimos no se encontraron datos`,
            });
        }
        return res.json({
            msg: "GetUsers",
            users,
        });
    }
    catch (error) {
        console.log("error");
        return res.status(500).json({
            msg: "Error en el servidor",
        });
    }
});
exports.getUsers = getUsers;
const getUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        const user = yield user_model_1.default.findById(id);
        if (!user) {
            return res.status(400).json({
                msg: `El usuario con el id: ${id} no existe!!!`,
            });
        }
        return res.json({
            msg: "GetUserId",
            user,
        });
    }
    catch (error) {
        console.log("error");
        return res.status(500).json({
            msg: "Error en el servidor",
        });
    }
});
exports.getUserId = getUserId;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { body } = req;
        const userExist = yield user_model_1.default.findOne({
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
        let userToSave = new user_model_1.default(body);
        yield userToSave.save();
        const token = yield generateJWT_1.generateJWT(userToSave._id, "10m");
        const expiresIn = yield generateJWT_1.parseJwt(token);
        return res.status(201).json({
            msg: "Usuario creado exitosamente",
            user: userToSave,
            token,
            expiresIn
        });
    }
    catch (error) {
        console.log("error");
        return res.status(500).json({
            msg: "Error en el servidor",
        });
    }
});
exports.postUser = postUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let { body } = req;
        const userExist = yield user_model_1.default.findByIdAndUpdate(id, body);
        if (!userExist) {
            return res.status(400).json({
                msg: `No existe un usuario con el id ${id}`,
            });
        }
        return res.json({
            msg: "putUser actualizado",
            userExist,
        });
    }
    catch (error) {
        console.log("error");
        return res.status(500).json({
            msg: "Error en el servidor",
        });
    }
});
exports.updateUser = updateUser;
//# sourceMappingURL=user-controller.js.map