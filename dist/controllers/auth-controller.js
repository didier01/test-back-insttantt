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
exports.refreshToken = exports.login = void 0;
const user_model_1 = __importDefault(require("../models/user-model"));
const generateJWT_1 = require("../helpers/generateJWT");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, password } = req.body;
        const userExist = yield user_model_1.default.findOne({
            email: user, phoneNumber: password
        });
        if (!userExist) {
            return res.status(400).json({
                msg: "El Correo y/o Contraseña que ingresaste son incorrectos",
                errors: "error",
            });
        }
        const token = yield generateJWT_1.generateJWT(userExist._id, "10m");
        const expiresIn = yield generateJWT_1.parseJwt(token);
        return res.json({
            msg: "ok",
            token,
            expiresIn,
            user: userExist,
        });
    }
    catch (error) {
        console.log("error");
        return res.status(500).json({
            msg: "Lo sentimos hubo un error en el servidor",
        });
    }
});
exports.login = login;
const refreshToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        const secret = process.env.SECRET_KEY || "insttantt2023";
        const payload = jsonwebtoken_1.default.verify(token, secret);
        const user = yield user_model_1.default.findById(payload.uid);
        if (!user) {
            return res.status(404).json({
                msg: `El usuario no existe!!!`,
            });
        }
        const newToken = yield generateJWT_1.generateJWT(user._id, "10m");
        const expiresIn = yield generateJWT_1.parseJwt(newToken);
        return res.json({
            msg: "ok",
            token: newToken,
            expiresIn,
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
exports.refreshToken = refreshToken;
//# sourceMappingURL=auth-controller.js.map