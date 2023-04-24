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
exports.verifyJwt = exports.parseJwt = exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (uid = "", time = "10m") => {
    const secret = process.env.SECRET_KEY || 'insttantt2023';
    return new Promise((resolve, reject) => {
        const payload = { uid,
            exp: Math.floor(Date.now() / 1000) + (60 * 10),
        };
        jsonwebtoken_1.default.sign(payload, secret, (err, token) => {
            // jwt.sign(payload, secret, { expiresIn: time }, (err: any, token: any) => {
            if (err) {
                console.error('token: ', err);
                reject("No se generó el Token");
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJWT = generateJWT;
const parseJwt = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = process.env.SECRET_KEY || 'insttantt2023';
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                reject("No se generó el Token");
            }
            else {
                // resolve(decoded.exp * 1000);
                resolve(decoded.exp);
            }
        });
    });
});
exports.parseJwt = parseJwt;
const verifyJwt = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = process.env.SECRET_KEY || 'insttantt2023';
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                reject("El Token ya expiró");
            }
            else {
                resolve('Token vigente');
            }
        });
    });
});
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=generateJWT.js.map